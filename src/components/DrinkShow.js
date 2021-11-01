import React from "react";
import "./DrinkShow.css";
import { Redirect } from 'react-router-dom';

export default function DrinkShow(props) {
  if (Object.keys(props.drink).length > 0) {
  const drink = props.drink;
  return (
    <div className="drink-page">
      <div className="drink-container">
        <div className="drink-image">
          <img src={drink.strDrinkThumb} alt="" />
        </div>
        <div className="drink-name">
          <h2>Name: {drink.strDrink}</h2>
          <h3>Category: {drink.strCategory}</h3>
        </div>
        <div className="btnDivs">
          <div className="btnMakeDiv">
            <button
              className="btnMake"
              onClick={() => props.history.push("/drink/detail")}>
              Make
            </button>
          </div>
          <div className="btnNextDiv">
            <button className="btnNext" onClick={props.handleNextDrink}>
              Next
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
