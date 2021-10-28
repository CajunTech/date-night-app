import React from "react";
import "./DrinkShow.css";

export default function DrinkShow(props) {
  const drink = props.drink;
  console.log(drink);
  return (
    <div className="drink-page">
      <div className="drink-container">
        {/* <h1>Drink Show</h1> */}
        <div className="drink-image">
                  <img src={drink.strDrinkThumb} alt="" />
                  
        </div>
        <div className="drink-name">
                  <h2>Name: {drink.strDrink}</h2>
                  <h3>Category: {drink.strCategory}</h3>
        </div>
        
      </div>
    </div>
  );
}
