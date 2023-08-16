import React, { useState } from "react"
import s from "./Reviews.module.css"

const Reviews = () => {
	const reviews = [
		{
			"id": 1,
			"review": "I had an amazing experience with this product. It exceeded my expectations!",
			"first_name": "John",
			"last_name": "Doe"
		},
		{
			"id": 2,
			"review": "The service provided was exceptional. I would highly recommend it to others.",
			"first_name": "Jane",
			"last_name": "Smith"
		},
		{
			"id": 3,
			"review": "I'm really impressed with the quality of this service. It's worth every penny.",
			"first_name": "Michael",
			"last_name": "Johnson"
		},
		{
			"id": 4,
			"review": "The team was very professional and attentive to my needs. I'm satisfied!",
			"first_name": "Emily",
			"last_name": "Williams"
		},
		{
			"id": 5,
			"review": "This product has made my life so much easier. I can't thank the team enough.",
			"first_name": "Daniel",
			"last_name": "Brown"
		}
	]

	const [currentSlide, setCurrentSlide] = useState(0)

	const onClickBack = () => {
		if (currentSlide === 0) {
			setCurrentSlide(reviews.length - 1)
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	const onClickNext = () => {
		if (currentSlide === reviews.length - 1) {
			setCurrentSlide(0)
		} else {
			setCurrentSlide(currentSlide + 1)
		}
	}

	return (
		<div className={s.Reviews}>
			<h2 className="title">
				What Our Customer Says
			</h2>
			{reviews[currentSlide].img ?
				<img className={s.avatar} src="" alt="" />
				:
				<img className={s.avatar} src="/avatarUser.png" alt="" />
			}

			<div className={s.slider}>
				<button onClick={onClickBack}>
					back
				</button>

				<div className={s.content}>
					<p className={s.text}>
						{reviews[currentSlide].review}
					</p>
					<h4 className={s.name}>
						{reviews[currentSlide].first_name} {reviews[currentSlide].last_name}
					</h4>
				</div>

				<button onClick={onClickNext}>
					next
				</button>
			</div>


		</div>
	)
}

export default Reviews