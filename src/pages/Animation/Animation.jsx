import React from "react"
import Header from '../../components/Header/Header'
import s from "./Animation.module.css"
import Collapsible from './examples/Collapsible'
import Filter from './examples/Filter'
import { data } from './data.js'
import Menu from './examples/Menu'

const Animation = () => {
	return (
		<div className={s.Animation}>
			<Header />

			<div className='container'>
				{/* <Collapsible title='Toggle me'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non accusantium sapiente sunt alias dolorum doloremque voluptates quae tempora, tempore dignissimos quas debitis. Aliquid praesentium eligendi impedit quasi! Dignissimos, nostrum esse.
				</Collapsible> */}

				{/* <Filter data={data} /> */}

				<Menu />


			</div>
		</div>
	)
}

export default Animation