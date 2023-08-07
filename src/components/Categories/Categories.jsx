import React from "react"
import { Link } from 'react-router-dom'
import s from "./Categories.module.css"
import { useSelector } from 'react-redux'

const Categories = ({ categoryId, setCategoryId }) => {

	const categories = useSelector(state => state.filter.categories)

	return (
		<div className={s.Categories}>
			<div className="container">
				<div className={s.wrapper}>
					<ul className={s.list}>
						{categories.map((value, i) => (

							<li key={i} onClick={() => setCategoryId(i)} className={s.item}>
								<Link to='/shop'>
									{value}
								</Link>
							</li>
						))}
					</ul>

					<div className={s.slider}>
						s
					</div>
				</div>

			</div>

		</div>
	)
}

export default Categories