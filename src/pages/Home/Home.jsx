import React from "react"
import Header from '../../components/Header/Header'
import Feature from '../../components/Pages/HomePage/Feature/Feature'
import HeroBlock from '../../components/Pages/HomePage/HeroBlock/HeroBlock'
import Offer from '../../components/Pages/HomePage/Offer/Offer'
import s from "./Home.module.css"

const Home = () => {



	return (
		<div className={s.Home}>
			<Header />
			<div className="container">
				<HeroBlock />

				<Feature />

				<Offer />

			</div>
		</div>
	)
}

export default Home