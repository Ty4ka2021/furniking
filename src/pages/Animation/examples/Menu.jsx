import { motion } from 'framer-motion'
import React, { useState } from "react"
import s from "./Menu.module.css"

const menuData = ['Short', 'Very Loooooooong item', 'Normal item']

const Menu = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<div className={s.Menu}>
			{
				menuData.map((item, index) => (
					<MenuItem
						key={item}
						item={item}
						isSelected={activeIndex === index}
						handleClick={() => setActiveIndex(index)}
					/>
				))
			}
		</div>
	)
}

export default Menu


const MenuItem = ({ item, isSelected, handleClick }) => {
	return (
		<motion.div
			className={s.MenuItem}
			onClick={handleClick}
			initial={{ color: '#000' }}
			animate={{
				color: isSelected ? 'rgba(255, 0, 0)' : '#000'
			}}
		>
			{isSelected && <ActiveLine />}
			{item}
		</motion.div >
	)
}


const ActiveLine = () => {
	return (
		<motion.div className={s.ActiveLine}
			layoutId='activeItem'
		>

		</motion.div>
	)
}