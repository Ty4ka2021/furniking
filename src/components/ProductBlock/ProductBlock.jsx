import React from "react"
import s from "./ProductBlock.module.css"

const ProductBlock = ({ id, title, category, rating, price, imageUrl }) => {
	return (
		<div className={s.ProductBlock}>
			<div className={s.imgBox}>
				<img className={s.img} src={imageUrl} alt="" />
			</div>
			<p className={s.category}>{category}</p>
			<h4 className={s.title}>{title}</h4>
			<div className={s.box}>
				<span className={s.price}>${price}</span>
				<span className={s.rating}>{rating}</span>
			</div>

			<button onClick={() => console.log(id)} className={s.btn}>Add to cart</button>
		</div>
	)
}

export default ProductBlock