import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home(props) {
	return (
		<div>
			<div className="homeTextContainer">
				<h2 className="homeText">
					Click one of the buttons below for a random suggestion
				</h2>
			</div>
			<div className="home_container">
				<div className="home_drink">
					<img
						className="drinkImg"
						src="/images/liquor/liquor6.png"
						alt="dna logo"
					/>
					<Link to="/drink">
						<button onClick={() => props.handleNextDrink()}>Drink</button>
					</Link>
				</div>

				<div className="home_combo">
					<img
						className="comboImg"
						src="/images/combo/combo5.png"
						alt="combo"
					/>
					<Link to="/night">
						<button onClick={() => props.randomAll()}>Make my Night</button>
					</Link>
				</div>

				<div className="home_meal">
					<img
						className="mealImg"
						src="/images/dining/dining6.png"
						alt="meal"
					/>
					<Link to="/meal">
						<button onClick={() => props.getRandomMeal()}>Food</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
