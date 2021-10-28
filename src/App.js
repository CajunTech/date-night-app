import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.setState = {
      drink: {},
    }
  }
  // when the page renders, make the api call to get random drink
  componentDidMount() {
    axios.get("http://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
      this.setState({drink: response.data.drinks})
    })
}


  render() {
    return (
      <div>
        <h1>Drink API</h1>
        <h2>{this.state.drink.strDrink}</h2>
      </div>
    );
  }
}
