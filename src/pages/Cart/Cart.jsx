import React from "react"
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import s from "./Cart.module.css"
import CartItem from './CartItem/CartItem'

const Cart = () => {
	const items = useSelector(state => state.cart.cart)
	return (
		<div className={s.Cart}>
			<Header />
			<div className="container">
				<div className={s.wrapper}>
					{items.map((obj) => <CartItem key={obj.id} {...obj} />)}
				</div>
			</div>
		</div>
	)
}

export default Cart