import React from "react"
import { useNavigate } from 'react-router-dom'
import s from "./NotFound.module.css"

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className={s.NotFound}>
			NotFound
			<button onClick={() => navigate('/')}>
				go home
			</button>
		</div>
	)
}

export default NotFound