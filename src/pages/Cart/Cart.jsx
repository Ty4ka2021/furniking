import React, { useState } from "react"
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import s from "./Cart.module.css"
import CartItem from './CartItem/CartItem'

const Cart = () => {
	const items = useSelector(state => state.cart.cart)
	const totalPrice = useSelector(state => state.cart.totalPrice)

	return (
		<div className={s.Cart}>
			<Header />
			<div className="container">

				{items.length > 0 ?
					<>
						<h2 className='title'>Cart</h2>
						<div className={s.wrapper}>
							{items.map((obj) => <CartItem key={obj.id} {...obj} />)}
						</div>
						<div className={s.bottom}>
							<h4 className={s.total}>Total sum:
								<span>
									{totalPrice}$
								</span>
							</h4>
							<button className={s.order}>To order</button>
						</div>
					</>

					:
					<div>
						Кошик порожній
					</div>
				}


			</div>
		</div>
	)
}

export default Cart