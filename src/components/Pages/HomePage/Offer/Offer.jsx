import React from "react"
import { Link } from 'react-router-dom'
import s from "./Offer.module.css"

import classNames from 'classnames'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

const Offer = () => {
	return (
		<div className={s.Offer}>
			<div className={classNames(s.div1, s.item)}>
				<img src={img1} alt="" />
				<div className={s.box}>
					<h3>Modern Furniture Collections</h3>
					<p>Starting from $500</p>
					<Link to='' >Read more==</Link>
				</div>
			</div>
			<div className={classNames(s.div2, s.item)}>
				<img src={img2} alt="" />
				<div className={s.box}>
					<h3>Geometric Bookcase</h3>
					<p>Up to 20% discount</p>
					<Link to='' >Read more==</Link>
				</div>
			</div>
			<div className={classNames(s.div3, s.item)}>
				<img src={img3} alt="" />
				<div className={s.box}>
					<h3>Minimal Sofa collections </h3>
					<p>Up to 20% discount</p>
					<Link to='' >Read more==</Link>
				</div>
			</div>
		</div>
	)
}

export default Offer