import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import ProductBlock from '../../components/ProductBlock/ProductBlock'
import { fetchProducts } from '../../redux/slices/productsSlice'
import s from "./Shop.module.css"

const Shop = () => {
	const dispatch = useDispatch()

	const { products } = useSelector(state => state.products)
	const status = useSelector(state => state.products.status)
	const categories = useSelector(state => state.filter.categories)
	const categoryId = useSelector(state => state.filter.categoryId)

	const items = products.map((obj) => (
		<ProductBlock {...obj} />
	))

	useEffect(() => {
		dispatch(fetchProducts(categories[categoryId]))
	}, [categoryId])




	return (
		<div className={s.Shop}>
			<Header />

			{status === 'Error'
				? <div>Error</div>
				: <div className='container'>
					<ul className={s.list}>
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