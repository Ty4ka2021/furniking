import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import s from "./ProductBlock.module.css"

const ProductBlock = (obj) => {
	const dispatch = useDispatch()

	const addToCartClick = (obj) => {
		dispatch(addToCart(obj))
	}

	const cartId = useSelector(state => state.cart.cartId)


	return (
		<div className={s.ProductBlock}>
			<Link to={`/product/${obj.id}`} >
				<div className={s.imgBox}>
					<img className={s.img} src={obj.imageUrl} alt="" />
				</div>
				<p className={s.category}>{obj.category}</p>
				<h4 className={s.title}>{obj.title}</h4>
				<div className={s.box}>
					<span className={s.price}>${obj.price}</span>
					<span className={s.oldPrice}>${obj.oldPrice}</span>
					<span className={s.rating}>{obj.rating}</span>
				</div>

			</Link>
			<button disabled={cartId.includes(obj.id)} onClick={() => addToCartClick(obj)}
				className={s.btn}>{cartId.includes(obj.id) ? 'In cart ' : 'Add to cart'} </button>
		</div>
	)
}

export default ProductBlock