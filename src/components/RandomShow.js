import React from 'react';
import './RandomShow.css';
import { Redirect } from 'react-router-dom';

export default function RandomShow(props) {
	if (
		Object.keys(props.meal).length > 0 &&
		Object.keys(props.drink).length > 0
	) {
		const drink = props.drink;
		const meal = props.meal;
		return (
			<div className="nightShow">
				<div className="nightRandomAll">
					<button onClick={props.randomAll} className="btn nightRandomBtn">
						Try Again
					</button>
				</div>
				<div className="nightShowPage">
					<div className="nightContainer">
						<div
							className="nightImage"
							style={{ backgroundImage: `url(${meal.strMealThumb})` }}
						></div>
						<div className="nightNameCont">
							<h1 className="nightName">{meal.strMeal}</h1>
						</div>
						<div className="nightButtons">
							<button
								onClick={() => props.history.push('/meal/detail')}
								className="btn nightBtn"
							>
								Ready to Eat
							</button>
						</div>
					</div>

					<div className="nightContainer">
						<div
							className="nightImage"
							style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}
						></div>
						<div className="nightNameCont">
							<h1 className="nightName">{drink.strDrink}</h1>
						</div>
						<div className="nightButtons">
							<button
								onClick={() => props.history.push('/drink/detail')}
								className="btn nightBtn"
							>
								Ready to Drink
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Redirect to={'/'} />;
	}
}
