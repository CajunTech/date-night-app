import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import DrinkShow from './components/DrinkShow'
import { Route } from 'react-router-dom'
import Header from './components/Header'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      drink: {},
      meal: {},
    };
  }

  async componentDidMount() {
    this.handleNextDrink()
  }

  handleNextDrink = (e) => {
    e.preventDefault();
    axios
      // when the page renders, make the api call to get random drink
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        this.setState({ drink: response.data.drinks[0] });
      });
  }



    render() {
      return (
        <div className="app">
          <main>
            <Header />

            <Route path="/drink"
              render=
              {routerProps =>
                <DrinkShow
                  {...routerProps}
                  drink={this.state.drink}
                  handleNextDrink={this.handleNextDrink}/>
              } />
          
          </main>
        </div>
      );
    }

  }
