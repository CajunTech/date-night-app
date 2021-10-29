import React from 'react';
import './MealDetails.css';
// import MealIngredients from './MealIngredients';
import MealInstructions from './MealInstructions';
import {Redirect} from 'react-router-dom'

export default function MealDetails(props) {
	// let ingArr = [];
	// let mealArr = [];
	// let measArr = [];
    // let filteredArr = [];
	let meal = props.meal

	if (Object.keys(meal).length > 0) {
   
	// mealArr = Object.entries(props.meal)
	// console.log('meal', props.meal);

	// for (let i = 9; i <= 26; i++) {
	// 	if (mealArr[i][1] !== '') {
	// 		ingArr.push(mealArr[i][1]);
	// 		console.log(`ma${i}`, ingArr);
	// 	}
	// }

	// for (let i = 29; i <= 46; i++) {
	// 	if (mealArr[i][1] !== '') {
	// 		measArr.push(mealArr[i][1]);
	// 		console.log(`ms${i}`, measArr);
	// 	}
	// }
    // for (let i = 0; i < ingArr.length; i++) {
	// 		filteredArr.push(measArr[i] + ' ' + ingArr[i]);
	// 		console.log(`fa${i}`, filteredArr);
	// }
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

				<br />
				<h2>Instructions:</h2>
				<div>
					{/* {filteredArr.map((ing, index) => {
						return <p key={index}>{ing}</p>;
					})} */}
				</div>
				<hr></hr>
				<MealInstructions meal={props.meal} />
				<hr></hr>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
				} else {
					Redirect('/')
				}
}
