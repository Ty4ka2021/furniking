import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories/Categories'
import Header from '../../components/Header/Header'
import { setCategoryId } from '../../redux/slices/filterSlice'
import { setStatus } from '../../redux/slices/productsSlice'
import s from "./Home.module.css"

const Home = () => {



	return (
		<div className={s.Home}>
			<Header />

		</div>
	)
}

export default Home