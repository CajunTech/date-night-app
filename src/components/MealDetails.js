import React from 'react';

export default function MealDetails(props) {
	return (
		<div className="mealDetailsPage">
			<div
				className="mealImage"
				style={{ backgroundImage: `url("${props.meal.strMealThumb}")` }}
			></div>
		</div>
	);
}
