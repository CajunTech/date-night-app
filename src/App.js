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
		/*get a random meal json from mealdb and assign to meal state */
		axios
			.get('https://www.themealdb.com/api/json/v1/1/random.php')
			.then((response) => {
				this.setState({meal: response.data.meals[0]});
			});
	};

	render() {
		return (
			<div>
			</div>
		);
	}
}
