import React from 'react';
import './MealDetails.css';
import MealIngredients from './MealIngredients';
import MealInstructions from './MealInstructions';
import { Redirect } from 'react-router-dom';

export default function MealDetails(props) {
	if (Object.keys(props.meal).length > 0) {
		return (
			<div className="mealDetailsPage">
				<div className="mealDetailsContainer">
					<div
						className="mealDetailsImage"
						style={{ backgroundImage: `url("${props.meal.strMealThumb}")` }}
					></div>
					<h1 className="mealName">{props.meal.strMeal}</h1>
					<hr></hr>
					<h2>Ingredients:</h2>
					<MealIngredients meal={props.meal} />
					<br />
					<hr></hr>
					<h2>Instructions:</h2>
					<MealInstructions meal={props.meal} />
					<br />
					<hr></hr>
					<br />
					<br />
				</div>
			</div>
		);
	} else {
		return <Redirect to={'/'} />;
	}
}
