import React from "react"
import s from "./CartItem.module.css"
import { useDispatch } from 'react-redux'
import { addToCart, minusItem, removeFromCart } from '../../../redux/slices/cartSlice'

const CartItem = ({ id, title, price, oldPrice, imageUrl, count }) => {
	const dispatch = useDispatch()

	const removeFromCartClick = (id) => {
		dispatch(removeFromCart(id))
	}
	return (
		<div className={s.CartItem}>
			<img className={s.img} src={imageUrl} alt="" />
			<p className={s.text}>
				{title}
			</p>
			<div>
				<button onClick={() => dispatch(minusItem(id))}>-</button>
				{count}
				<button onClick={() => dispatch(addToCart({ id, title, price, oldPrice, imageUrl, count }))}>+</button>
			</div>
			<div className={s.box}>
				<button onClick={() => removeFromCartClick(id)}>delate</button>
				{oldPrice}
				{price}
			</div>
		</div>
	)
}

export default CartItem