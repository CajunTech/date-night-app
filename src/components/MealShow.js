import React from 'react';
import './MealShow.css';

export default function MealShow(props) {
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
				<button
					onClick={props.getRandomMeal}
					className="btn mealBtn"
				>
					Try Another?
				</button>
			</div>
		</div>
	);
}
