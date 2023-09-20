import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from "react"
import Button from './Button'
import s from "./Filter.module.css"

const Filter = ({ data }) => {
	const [cards, setCards] = useState(data.filter(el => el.category === 'cars'))

	const buttons = data.reduce((acc, el) => {
		if (acc.includes(el.category)) return acc

		return [...acc, el.category]
	}, [])

	const handleFilter = (selector) => {
		setCards(data.filter(el => el.category === selector))
	}
	return (
		<div className={s.Filter}>
			<div>
				{
					buttons.map(btn => (
						<Button
							key={btn}
							text={btn}
							handleClick={() => handleFilter(btn)}
						/>
					))
				}
			</div>
			<motion.div
				layout
				style={{ overflow: 'hidden', maxWidth: 400, border: '3px solid red' }}
			>
				<AnimatePresence initial={false} mode='popLayout'>
					{
						cards.map(el => (
							<motion.div
								key={el.title}
								layout
								style={{
									float: 'left',
									backgroundColor: '#2196f3',
									color: '#fff',
									width: '100px',
									lineHeight: '100px',
									textAlign: 'center',
									margin: '2px'
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1 }}

							>
								{el.title}
							</motion.div>
						))
					}
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export default Filter