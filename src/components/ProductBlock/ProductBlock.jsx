import React from "react"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import s from "./ProductBlock.module.css"

const ProductBlock = (obj) => {
	const dispatch = useDispatch()

	const addToCartClick = (obj) => {
		dispatch(addToCart(obj))
	}
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
			<button onClick={() => addToCartClick(obj)} className={s.btn}>Add to cart</button>
		</div>
	)
}

export default ProductBlock