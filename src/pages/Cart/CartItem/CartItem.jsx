import React from "react"
import s from "./CartItem.module.css"
import { useDispatch } from 'react-redux'
import { addToCart, minusItem, removeFromCart } from '../../../redux/slices/cartSlice'
import classNames from 'classnames'

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

			<div className={s.countBox}>
				<button className={count === 1 ? classNames(s.btnCount, s.btnDisabled) : s.btnCount} disabled={count === 1} onClick={() => dispatch(minusItem({ id, price }))}>-</button>

				<span className={s.count}>
					{count}
				</span>

				<button className={s.btnCount} onClick={() => dispatch(addToCart({ id, title, price, oldPrice, imageUrl, count }))}>+</button>
			</div>

			<div className={s.box}>
				<button className={s.btn} onClick={() => removeFromCartClick(id)}>Delate</button>
				<span className={s.oldPrice}>
					{oldPrice * count}$
				</span>
				<span className={s.price}>
					{price * count}$
				</span>
			</div>
		</div>
	)
}

export default CartItem