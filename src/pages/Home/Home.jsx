import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories/Categories'
import Header from '../../components/Header/Header'
import { setCategoryId } from '../../redux/slices/filterSlice'
import { fetchProducts, setStatus } from '../../redux/slices/productsSlice'
import s from "./Home.module.css"

const categories = ['All', 'Furniture', 'Armature', 'Tables', 'Chairs', 'Sofas', 'Mirrors', 'Stools', 'Benches']

const Home = () => {
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filter.categoryId)

	const setCategoryIdClick = (id) => {
		dispatch(setStatus('Loading'))
		dispatch(setCategoryId(id))
		dispatch(fetchProducts(categories[categoryId]))
	}

	// useEffect(() => {
	// 	dispatch(setStatus('Loading'))
	// 	dispatch(fetchProducts(categories[categoryId]))
	// }, [categoryId])





	return (
		<div className={s.Home}>
			<Header />

			<Categories categories={categories} categoryId={categoryId} setCategoryId={setCategoryIdClick} />

		</div>
	)
}

export default Home