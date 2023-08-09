import React from "react"
import s from "./SpecialOfferItem.module.css"

const SpecialOfferItem = () => {
	return (
		<div className={s.item}>
			<img className={s.img} src="" alt="" />
			<div className={s.box}>
				<h4 className={s.title}>	</h4>
				<p className={s.test}></p>
				<div className={s.wrapper}>
					<span className={s.price}></span>
					<button>Shop Now</button>
				</div>
			</div>
		</div>
	)
}

export default SpecialOfferItem