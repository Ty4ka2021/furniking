import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProductSkeleton from '../../UI/ProductSkeleton/ProductSkeleton'
import { fetchProduct } from '../../redux/slices/productSlice'
import Header from '../Header/Header'
import s from "./Product.module.css"

const Product = () => {

	const location = useLocation()
	const currentId = location.pathname.replace(/[^+\d]/g, '')
	const dispatch = useDispatch()
	const item = useSelector(state => state.product.product)
	const status = useSelector(state => state.product.status)

	useEffect(() => {
		dispatch(fetchProduct(currentId))
	}, [currentId])


	return (
		<div className={s.Product}>
			<Header />
			{status === 'Error'
				? <div>Error</div>
				: <div className='container'>
					{status === 'Loading'
						?
						<ProductSkeleton />
						:
						<div className={s.wrapper}>
							<img className={s.img} src={item.imageUrl} alt="" />
							<div className={s.box}>
								<h4 className={s.title}>
									{item.title}
								</h4>

								<span>rating</span>

								<div>
									{item.price}
								</div>

							</div>

						</div>
					}
				</div>
			}


		</div>
	)
}

export default Product