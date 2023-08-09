import classNames from 'classnames'
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopProducts } from '../../../../redux/slices/topProductsSlice'
import ProductBlock from '../../../ProductBlock/ProductBlock'
import s from "./Trending.module.css"

const Trending = () => {
	const dispatch = useDispatch()

	const category = ['Top Products', 'New Arrivals', 'Best Sellers']
	const [activeId, setActiveId] = useState(0)
	const status = useSelector(state => state.topProducts.status)

	useEffect(() => {
		dispatch(fetchTopProducts())
	}, [])

	const topProducts = useSelector(state => state.topProducts.topProducts)

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
									topProducts.map((obj) => (
										<ProductBlock {...obj} />
									))
								)}
								{activeId === 2 && (
									topProducts.map((obj) => (
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