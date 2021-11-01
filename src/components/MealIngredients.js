import React from 'react';

export default function MealIngredients(props) {
	let ingArr = [];
	let mealArr = [];
	let measArr = [];
	let filteredArr = [];

	mealArr = Object.entries(props.meal);
	//array indexes 9-28 are ingredients - finding all with actual values and pushing to a temp array
	for (let i = 9; i <= 26; i++) {
		if (
			mealArr[i][1] !== '' &&
			mealArr[i][1] !== ' ' &&
			mealArr[i][1] !== null &&
			mealArr[i][1] !== undefined
		) {
			ingArr.push(mealArr[i][1]);
		}
	}
	//array indexes 29-48 are measurements - finding all with actual values and pushing to a temp array
	for (let i = 29; i <= 46; i++) {
		if (mealArr[i][1] !== '') {
			measArr.push(mealArr[i][1]);
		}
	}
	//combining values from both temp arrays into single array for mapping
	for (let i = 0; i < ingArr.length; i++) {
		filteredArr.push(measArr[i] + ' - ' + ingArr[i]);
	}
	return (
		<div>
			{filteredArr.map((ing, index) => {
				return <p key={index}>{ing}</p>;
			})}
		</div>
	);
}
