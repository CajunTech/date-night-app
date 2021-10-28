import React from 'react';
import './MealDetails.css';
import MealIngredients from './MealIngredients';
import MealInstructions from './MealInstructions';

export default function MealDetails(props) {
	return (
		<div className="mealDetailsPage">
			<div className="mealDetailsContainer">
				<div
					className="mealDetailsImage"
					style={{ backgroundImage: `url("${props.meal.strMealThumb}")` }}
				></div>
				<h1 className="mealName">{props.meal.strMeal}</h1>
				<h2>Ingredients:</h2>
				<hr></hr>
				<MealInstructions meal={props.meal} />
				<br/>
				<h2>Instructions:</h2>
				<hr></hr>
				<MealInstructions meal={props.meal} />
			</div>
		</div>
	);
}
