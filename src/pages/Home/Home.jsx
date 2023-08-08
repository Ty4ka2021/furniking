import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Feature from '../../components/Pages/HomePage/Feature/Feature'
import HeroBlock from '../../components/Pages/HomePage/HeroBlock/HeroBlock'
import Offer from '../../components/Pages/HomePage/Offer/Offer'
import Trending from '../../components/Pages/HomePage/Trending/Trending'
import { fetchProducts } from '../../redux/slices/productsSlice'
import s from "./Home.module.css"

const Home = () => {
	const dispatch = useDispatch()

	const { products } = useSelector(state => state.products)
	const categories = useSelector(state => state.filter.categories)
	const categoryId = useSelector(state => state.filter.categoryId)



	useEffect(() => {
		dispatch(fetchProducts(categories[categoryId]))
	}, [])






	return (
		<div className={s.Home}>
			<Header />
			<div className="container">
				<HeroBlock />

				<Feature />

				<Offer />

				<Trending data={products} />

			</div>
		</div>
	)
}

export default Home