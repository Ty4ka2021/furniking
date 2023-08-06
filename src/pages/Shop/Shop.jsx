import React, { useEffect } from "react"
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import ProductBlock from '../../components/ProductBlock/ProductBlock'
import s from "./Shop.module.css"

const Shop = () => {

	const { products } = useSelector(state => state.products)
	const status = useSelector(state => state.products.status)

	const items = products.map((obj) => (
		<ProductBlock {...obj} />
	))

	useEffect(() => {
		console.log(products)
	}, [products])

	return (
		<div className={s.Shop}>
			<Header />

			{status === 'Error'
				? <div>Error</div>
				: <div>
					<ul>
						{status === 'Loading'
							? <div>Loading...</div>
							: items
						}
					</ul>
				</div>
			}
			shop
		</div>
	)
}

export default Shop