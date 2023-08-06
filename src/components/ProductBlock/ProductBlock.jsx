import React from "react"
import s from "./ProductBlock.module.css"

const ProductBlock = ({ title, price, imageUrl }) => {
	return (
		<div className={s.ProductBlock}>
			<img width={'100px'} height={'100px'} src={imageUrl} alt="" />
			{title}
			{price}
		</div>
	)
}

export default ProductBlock