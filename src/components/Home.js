import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {

	return (
		<div className="home_container">
			<div className="home_drink">
				<img
					className="drinkImg"
					src="/images/liquor/liquor2.png"
					alt="dna logo"
				/>
				<Link to="/drink">
					<button onClick={() => props.handleNextDrink()} className="btnNext">
						Drink?
					</button>
				</Link>
			</div>

			<div className="home_combo">
				<img className="comboImg" src="/images/combo/combo5.png" alt="combo" />
				<Link to="/night">
					<button onClick={() => props.randomAll()} className="btnNext">
						Both..
					</button>
				</Link>
			</div>

			<div className="home_meal">
				<img className="mealImg" src="/images/dining/dining6.png" alt="meal" />
				<Link to="/meal">
					<button onClick={() => props.getRandomMeal()} className="btnNext">
						Food?
					</button>
				</Link>
			</div>
		</div>
	);
}
