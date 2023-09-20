import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from "react"
import s from './Collapsible.module.css'

const Collapsible = (props) => {

	const {
		title = 'click me',
		children
	} = props

	const [isVisible, setIsVisible] = useState(true)

	const handleIsVisible = () => setIsVisible(!isVisible)

	return (
		<div className={s.Collapsible}>
			<div
				className={s.btn}
				onClick={handleIsVisible}
			>
				{title}
			</div>
			<AnimatePresence initial={false}>
				{isVisible && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
						style={{ overflow: 'hidden', border: '1px solid #ddd' }}
						transition={{ duration: 2 }}
					>
						<div style={{
							padding: '20px',
							width: 300,

						}}>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div >
	)
}

export default Collapsible