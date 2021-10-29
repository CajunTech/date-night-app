import React from 'react';
import {Redirect} from 'react-router-dom'

export default function MealIngredients(props) {
	let ingArr = [];
	let mealArr = [];
	let measArr = [];
    let filteredArr = [];

	mealArr = Object.entries(props.meal)
	console.log('meal', props.meal);

    if (mealArr.length < 1) {
        props.getRandomMeal
    }

	for (let i = 9; i <= 26; i++) {
		if (mealArr[i][1] !== '') {
			ingArr.push(mealArr[i][1]);
			console.log(`ma${i}`, ingArr);
		}
	}

	for (let i = 29; i <= 46; i++) {
		if (mealArr[i][1] !== '') {
			measArr.push(mealArr[i][1]);
			console.log(`ms${i}`, measArr);
		}
	}
    for (let i = 0; i < ingArr.length; i++) {
			filteredArr.push(measArr[i] + ' ' + ingArr[i]);
			console.log(`fa${i}`, filteredArr);
	}
	return (
		<div>
			{filteredArr.map((ing, index) => {
				return <p key={index}>{ing}</p>;
			})}
		</div>
	);
}
<MealIngredients meal={props.meal} />