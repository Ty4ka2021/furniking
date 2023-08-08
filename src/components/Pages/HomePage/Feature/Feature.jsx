import React from "react"
import s from "./Feature.module.css"
import cardImg from './img/Card.png'
import deliveryImg from './img/delivery.png'
import supportImg from './img/support.png'
import walletImg from './img/wallet.png'

const Feature = () => {
	return (
		<ul className={s.Feature}>
			<li className={s.item}>
				<img className={s.img} src={deliveryImg} alt="deliveryImg" />
				<div>
					<h4>Free Shipping</h4>
					<span>Orders over $100</span>
				</div>
			</li>
			<li className={s.item}>
				<img className={s.img} src={cardImg} alt="cardImg" />
				<div>
					<h4>Smart Gift Card</h4>
					<span>Buy $1000 to get card</span>
				</div>
			</li>
			<li className={s.item}>
				<img className={s.img} src={walletImg} alt="walletImg" />
				<div>
					<h4>Quick Payment</h4>
					<span>100% secure payment</span>
				</div>
			</li>
			<li className={s.item}>
				<img className={s.img} src={supportImg} alt="supportImg" />
				<div>
					<h4>24/7 Support</h4>
					<span>Quick support</span>
				</div>
			</li>
		</ul>
	)
}

export default Feature