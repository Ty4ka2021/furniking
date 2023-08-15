import React from "react"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Feature from '../../components/Pages/HomePage/Feature/Feature'
import HeroBlock from '../../components/Pages/HomePage/HeroBlock/HeroBlock'
import Offer from '../../components/Pages/HomePage/Offer/Offer'
import Reviews from '../../components/Pages/HomePage/Reviews/Reviews'
import Trending from '../../components/Pages/HomePage/Trending/Trending'
import s from "./Home.module.css"

const Home = () => {

	return (
		<div className={s.Home}>
			<Header />
			<div className="container">
				<HeroBlock />

				<Feature />

				<Offer />

				<Trending />

				<Reviews />



			</div>
			<Footer />
		</div>
	)
}

export default Home