import classNames from 'classnames'
import React from "react"
import { useDispatch } from 'react-redux'
import { addToCart, minusItem, removeFromCart } from '../../../redux/slices/cartSlice'
import s from "./CartItem.module.css"

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
				<button className={count === 1 ? classNames('btn', s.btnDisabled) : 'btn'} disabled={count === 1} onClick={() => dispatch(minusItem({ id, price }))}>-</button>

				<span className={s.count}>
					{count}
				</span>

				<button className='btn' onClick={() => dispatch(addToCart({ id, title, price, oldPrice, imageUrl, count }))}>+</button>
			</div>

			<div className={s.box}>
				<button className={classNames('btn', s.btnDelate)} onClick={() => removeFromCartClick(id)}>Delate</button>
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