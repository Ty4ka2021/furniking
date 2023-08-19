import React from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import s from "./Cart.module.css"
import CartItem from './CartItem/CartItem'
import CartSvg from './img/modal-cart-dummy.svg'

const Cart = () => {
	const items = useSelector(state => state.cart.cart)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const navigate = useNavigate()

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
							<button className='btn'>To order</button>
						</div>
					</>

					:
					<div className={s.box}>
						<img className={s.img} src={CartSvg} alt="" />
						<h3 className={s.text}>Cart is empty</h3>
						<button onClick={() => navigate('/')} className='btn'>Continue shopping</button>
					</div>
				}


			</div>
		</div>
	)
}

export default Cart