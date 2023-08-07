import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategoryId } from '../../redux/slices/filterSlice'
import { setStatus } from '../../redux/slices/productsSlice'
import s from "./Categories.module.css"

const Categories = () => {

	const dispatch = useDispatch()
	// const categoryId = useSelector(state => state.filter.categoryId)

	const setCategoryIdClick = (id) => {
		dispatch(setStatus('Loading'))
		dispatch(setCategoryId(id))
	}


	const categories = useSelector(state => state.filter.categories)

	const [show, setShow] = useState(false)


	return (
		<div className={s.Categories}>

			<button className={s.btn} >Category</button>

			<ul className={s.list}>
				{categories.map((value, i) => (

					<li key={i} onClick={() => setCategoryIdClick(i)} className={s.item}>
						<Link to='/shop'>
							{value}
						</Link>
					</li>
				))}
			</ul>



		</div>
	)
}

export default Categories