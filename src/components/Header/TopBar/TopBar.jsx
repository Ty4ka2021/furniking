import React, { useEffect, useRef, useState } from "react"
import s from "./TopBar.module.css"

const TopBar = () => {

	const [show, setShow] = useState(false)
	const [currentLang, setCurrentLang] = useState(0)
	const languages = ['English (USD)', 'Ukrainian (UA)']

	const onClickListItem = (id) => {
		setCurrentLang(id)
		setShow(false)
	}

	const showRef = useRef()
	useEffect(() => {

		const handleClickOutside = (event) => {
			if (!event.composedPath().includes(showRef.current)) {
				setShow(false)
			}
		}

		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className={s.TopBar}>
			<div className="container">
				<div className={s.wrapper}>
					<p className={s.text}>Welcome to our online shop</p>
					<div ref={showRef} className={s.select}>
						<div onClick={() => setShow(!show)}>
							{languages[currentLang]}
						</div>

						{show &&
							<div className={s.menu}>
								{languages.map((item, id) => (
									<div key={id} onClick={() => onClickListItem(id)}>{item}</div>
								))}
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBar