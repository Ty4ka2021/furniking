import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import ProductSkeleton from '../../UI/ProductSkeleton/ProductSkeleton'
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
					{status === 'Loading'
						?
						<ul className={s.list}>
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />

						</ul>
						:
						<ul className={s.list}>
							{items}
						</ul>
					}
				</div>
			}
		</div>
	)
}

export default Shop