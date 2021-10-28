import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      drink: {},
    };
  }
  // when the page renders, make the api call to get random drink
  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
      this.setState({drink: response.data.drinks[0]});
      });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
