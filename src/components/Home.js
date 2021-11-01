import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'

export default function Home(props) {

  function homeTest () {
    props.handleNextDrink()
    props.history.push('/drink')
  }

	return (
		<div className="home_container">
			<div className="home_drink">
				<img
					className="drinkImg"
					src="/images/liquor/liquor2.png"
					alt="dna logo"
				/>

				<button
					onClick={() => homeTest()}
					className="btnNext"
				>
					Drink?
				</button>
			</div>

			<div className="home_combo">
				<img className="comboImg" src="/images/combo/combo5.png" alt="combo" />
				<button
					onClick={() => props.history.push('/night')}
					className="btnNext"
				>
					Both..
				</button>
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
