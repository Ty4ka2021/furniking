import React from "react"
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { setCategoryId } from '../../../redux/slices/filterSlice'
import Categories from '../../Categories/Categories'
import s from "./Navigation.module.css"

const Navigation = () => {
	const dispatch = useDispatch()
	const location = useLocation()

	return (
		<div className={s.navigation}>
			<div className="container">
				<div className={s.wrapper}>
					<Categories />
					<nav className={s.nav}>
						<Link className={location.pathname === '/' ? s.active : ''} to='/'>Home</Link>
						<Link onClick={() => dispatch(setCategoryId(0))} className={location.pathname === '/shop' ? s.active : ''} to='/shop'>Shop</Link>
						<Link className={location.pathname === '/blog' ? s.active : ''} to='/blog'>Blog</Link>
						<Link className={location.pathname === '/about' ? s.active : ''} to='/about'>About</Link>
						<Link className={location.pathname === '/contact' ? s.active : ''} to='/contact'>Contact us</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navigation