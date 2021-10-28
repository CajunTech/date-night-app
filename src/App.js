import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import DrinkShow from './components/DrinkShow'
import MealShow from './components/MealShow'
import { Route } from 'react-router-dom';

import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			drink: {},
			meal: {},
		};
	}

	componentDidMount() {
	this.handleNextDrink()
  this.getRandomMeal()
		}

 handleNextDrink = (e) => {
    axios
      // when the page renders, make the api call to get random drink
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        this.setState({ drink: response.data.drinks[0] });
      });
  }
getRandomMeal = () => {
		/*get a random meal json from mealdb and assign to meal state */
		axios
			.get('https://www.themealdb.com/api/json/v1/1/random.php')
			.then((response) => {
				this.setState({ meal: response.data.meals[0] });
			});
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Route
					path="/meal"
					render={(routerProps) => (
						<MealShow meal={this.state.meal} {...routerProps} getRandomMeal={this.getRandomMeal}/>
					)}
				/>
 <Route path="/drink"
              render=
              {routerProps =>
                <DrinkShow
                  {...routerProps}
                  drink={this.state.drink}
                  handleNextDrink={this.handleNextDrink}/>
              } />
			</div>
		);
	}
}

