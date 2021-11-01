import React from 'react';
import './MealShow.css';
import { Redirect } from 'react-router-dom';

export default function MealShow(props) {
	if (Object.keys(props.meal).length > 0) {
		return (
			<div className="mealShowPage">
				<div className="mealShowContainer">
					<div
						className="mealImage"
						style={{ backgroundImage: `url("${props.meal.strMealThumb}")` }}
					></div>
					<h1 className="mealName">{props.meal.strMeal}</h1>
				</div>
				<div className="mealButtons">
					<button
						onClick={() => props.history.push('/meal/detail')}
						className="btn mealBtn"
					>
						Looks Good
					</button>
					<button onClick={props.getRandomMeal} className="btn mealBtn">
						Try Another?
					</button>
				</div>
			</div>
		);
	} else {
		return <Redirect to={'/'} />;
	}
}
