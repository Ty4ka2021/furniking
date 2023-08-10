import React from "react"
import { Link } from 'react-router-dom'
import s from "./Footer.module.css"

const Footer = () => {
	return (
		<div className={s.Footer}>
			<div className="container">
				<ul className={s.list}>

					<li className={s.item}>
						<Link to='/' >
							<img className={s.logo} src='/Logo.png' alt="" />
						</Link>
						<p className={s.text}>
							Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</p>
						<div className={s.social}>

						</div>
					</li>

					<li className={s.item}>
						<h4 className={s.title}>
							Help
						</h4>
						<ul className={s.links}>
							<li className={s.link}>
								<a href="">Privacy Policy</a>
							</li>
							<li className={s.link}>
								<a href="">Shipping & Delivery</a>
							</li>
							<li className={s.link}>
								<a href="">Refund Policy</a>
							</li>
							<li className={s.link}>
								<a href="">Track Your  Order</a>
							</li>
						</ul>
					</li>

					<li className={s.item}>
						<h4 className={s.title}>
							Store
						</h4>
						<ul className={s.links}>
							<li className={s.link}>
								<a href="">Furniture</a>
							</li>
							<li className={s.link}>
								<a href="">Tabble</a>
							</li>
							<li className={s.link}>
								<a href="">Sofa</a>
							</li>
							<li className={s.link}>
								<a href="">Other</a>
							</li>
						</ul>
					</li>

					<li className={s.item}>
						<h4 className={s.title}>
							Supports
						</h4>
						<ul className={s.links}>
							<li className={s.link}>
								<a href="">Feedback</a>
							</li>
							<li className={s.link}>
								<a href="">Contact</a>
							</li>
							<li className={s.link}>
								<a href="">Download app</a>
							</li>
							<li className={s.link}>
								<a href="">Terms conditions</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<span className={s.line}></span>

			<div className="container">
				<div className={s.bottom}>
					<p>
						© 2021 Funking - All rights reserved.
					</p>
					<ul className={s.bottomList}>
						<li>
							<a href="">Privacy</a>
						</li>
						<li>
							<a href="">Security</a>
						</li>
						<li>
							<a href="">Terms</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer