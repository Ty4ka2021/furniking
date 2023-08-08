import classNames from 'classnames'
import React, { useState } from "react"
import { useSelector } from 'react-redux'
import ProductBlock from '../../../ProductBlock/ProductBlock'
import s from "./Trending.module.css"

const Trending = ({ data }) => {

	const category = ['Top Products', 'New Arrivals', 'Best Sellers']
	const [activeId, setActiveId] = useState(0)
	const status = useSelector(state => state.products.status)

	const topProductsId = new Array
	const newArrivalsId = new Array
	const bestSellersId = new Array

	const generateRandomId = (myArr) => {
		const randomNum = Math.floor(Math.random() * 20 + 10)
		for (let i = 0; i < randomNum; i++) {
			const randomNumber = Math.floor(Math.random() * data.length + 1)
			myArr.push(randomNumber)
		}
	}

	generateRandomId(topProductsId)
	generateRandomId(newArrivalsId)
	generateRandomId(bestSellersId)

	const topProducts = data.filter(item => topProductsId.includes(Number(item.id)))
	const newArrivals = data.filter(item => topProductsId.includes(Number(item.id)))
	const bestSellers = data.filter(item => topProductsId.includes(Number(item.id)))


	return (
		<div className={s.Trending}>
			<h2 className='title'>Trending</h2>

			<div className={s.category}>
				{category.map((value, i) => (
					<div onClick={() => setActiveId(i)} className={activeId === i ? classNames(s.item, s.active) : s.item}>
						{value}
					</div>
				))}
			</div>

			<div>

				{status === 'Error'
					? <div>Error</div>
					:
					<ul>
						{status === 'Loading'
							? <div>Loading...</div>
							: <div className={s.list}>
								{activeId === 0 && (
									topProducts.map((obj) => (
										<ProductBlock {...obj} />
									))
								)}
								{activeId === 1 && (
									newArrivals.map((obj) => (
										<ProductBlock {...obj} />
									))
								)}
								{activeId === 2 && (
									bestSellers.map((obj) => (
										<ProductBlock {...obj} />
									))
								)}
							</div>
						}
					</ul>

				}
			</div>

		</div>
	)
}



export default Trending