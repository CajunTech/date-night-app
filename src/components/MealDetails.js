import React from 'react';
import './MealDetails.css';
// import MealIngredients from './MealIngredients';
import MealInstructions from './MealInstructions';
import {Redirect} from 'react-router-dom'

export default function MealDetails(props) {
	let ingArr = [];
	let mealArr = [];
	let measArr = [];
    let filteredArr = [];
	let meal = props.meal

	if (Object.keys(meal).length > 0) {
   
	mealArr = Object.entries(props.meal)

	for (let i = 9; i <= 26; i++) {
		if (mealArr[i][1] !== '' && mealArr[i][1] !== ' ' && mealArr[i][1] !== null && mealArr[i][1] !== undefined) {
			ingArr.push(mealArr[i][1]);
		}
	}

	for (let i = 29; i <= 46; i++) {
		if (mealArr[i][1] !== '') {
			measArr.push(mealArr[i][1]);
		}
	}
    for (let i = 0; i < ingArr.length; i++) {
			filteredArr.push(measArr[i] + ' ' + ingArr[i]);
	}
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
				<div>
					{filteredArr.map((ing, index) => {
						return <p key={index}>{ing}</p>;
					})}
				</div>
				<br/>
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
					return <Redirect to={"/"} />
				}
}
