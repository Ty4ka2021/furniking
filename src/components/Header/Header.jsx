import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchValue } from '../../redux/slices/filterSlice'
import s from "./Header.module.css"
import TopBar from './TopBar/TopBar'
import Categories from '../Categories/Categories'
import Navigation from './Navigation/Navigation'

const Header = () => {
	const dispatch = useDispatch()
	const search = useSelector(state => state.filter.searchValue)
	const cartId = useSelector(state => state.cart.cartId)
	let count = cartId.length

	return (
		<div className={s.Header}>
			<TopBar />
			<div className="container">
				<div className={s.wrapper}>
					<Link to='/' className={s.logo}>
						<img src='/Logo.png' alt="" />
					</Link>

					<div className={s.search}>
						<svg className={s.searchSvg} viewBox="0 0 32 32"><g id="_136_search-md" data-name="136 search-md"><path d="M14,25A11,11,0,1,1,25,14,11,11,0,0,1,14,25ZM14,5a9,9,0,1,0,9,9A9,9,0,0,0,14,5Z" /><rect x="23.53" y="19.63" width="2" height="9.8" transform="translate(-10.16 24.53) rotate(-45)" /></g></svg>

						<input type="text" placeholder='Search here' onChange={(e) => dispatch(setSearchValue(e.target.value))} value={search} />

						<svg onClick={() => dispatch(setSearchValue(''))} className={s.closeSvg} viewBox="0 0 512 512"><g id="cross"><g ><line x1="112.5" x2="401" y1="112.5" y2="401" /><line x1="401" x2="112.5" y1="112.5" y2="401" /></g></g><g id="cross_copy"><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" /></g></svg>
					</div>

					<Link to='/cart' className={s.cart}>
						<svg viewBox="0 0 24 24">
							<path d="M5.50835165,12.5914912 C5.5072855,12.5857255 5.50631828,12.5799252 5.5054518,12.5740921 L4.28533671,5.25340152 C4.16478972,4.53011956 3.53900455,4 2.80574582,4 L2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.22385763 2.22385763,3 2.5,3 L2.80574582,3 C3.99756372,3 5.0190253,3.84029234 5.25525588,5 L21.5,5 C21.8321894,5 22.0720214,5.31795246 21.980762,5.63736056 L19.980762,12.6373606 C19.9194332,12.8520113 19.7232402,13 19.5,13 L6.59023021,13 L6.71466329,13.7465985 C6.83521028,14.4698804 7.46099545,15 8.19425418,15 L19.5,15 C19.7761424,15 20,15.2238576 20,15.5 C20,15.7761424 19.7761424,16 19.5,16 L8.19425418,16 C6.97215629,16 5.92918102,15.1164674 5.72826937,13.9109975 L5.5083519,12.5914927 L5.50835165,12.5914912 Z M5.42356354,6 L6.42356354,12 L19.1228493,12 L20.837135,6 L5.42356354,6 Z M8,21 C6.8954305,21 6,20.1045695 6,19 C6,17.8954305 6.8954305,17 8,17 C9.1045695,17 10,17.8954305 10,19 C10,20.1045695 9.1045695,21 8,21 Z M8,20 C8.55228475,20 9,19.5522847 9,19 C9,18.4477153 8.55228475,18 8,18 C7.44771525,18 7,18.4477153 7,19 C7,19.5522847 7.44771525,20 8,20 Z M17,21 C15.8954305,21 15,20.1045695 15,19 C15,17.8954305 15.8954305,17 17,17 C18.1045695,17 19,17.8954305 19,19 C19,20.1045695 18.1045695,21 17,21 Z M17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 C16.4477153,18 16,18.4477153 16,19 C16,19.5522847 16.4477153,20 17,20 Z" />
						</svg>
						<span className={s.count}>
							{count}
						</span>
					</Link>
				</div>

			</div>
			<Navigation />
		</div>
	)
}

export default Header