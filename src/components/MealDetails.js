import React from 'react';
import './MealDetails.css';

export default function MealDetails(props) {
	return (
		<div className="mealDetailsPage">
		<div className="mealDetailsContainer">
			<div
				className="mealDetailsImage"
				style={{ backgroundImage: `url("${props.meal.strMealThumb}")` }}
			></div>
			<h1 className="mealName">{props.meal.strMeal}</h1>
		</div>
	</div>
	);
}
