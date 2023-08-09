import React, { useEffect } from "react"
import s from "./Product.module.css"
import { useLocation } from 'react-router-dom'
import { fetchProduct } from '../../redux/slices/productsSlice'

const Product = () => {

	const location = useLocation()
	const currentId = location.pathname.replace(/[^+\d]/g, '')

	useEffect(() => {
		fetchProduct(currentId)
	}, [])
	return (
		<div className={s.Product}>
			product
		</div>
	)
}

export default Product