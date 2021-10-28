import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			meal: {},
		};
	}

	componentDidMount = () => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/random.php')
			.then((response) => {
				this.setState({meal: response.data.meals[0]});
			});
	};

	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<h2>{this.state.meal.strMeal}</h2>
			</div>
		);
	}
}
