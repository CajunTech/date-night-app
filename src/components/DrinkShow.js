import React from "react";

export default function DrinkShow(props) {
  const drink = props.drink;
  console.log(drink);
  return (
    <div className="drink-container">
      <h1>Drink Show</h1>
      <div className="drink-image">
        <img src={drink.strDrinkThumb} />
      </div>
      <div className="drink-name">
        <h2>{drink.strDrink}</h2>
          </div>
          <div className="drink-cat">
          <h3>{drink.strCategory}</h3>
          </div>
      
    </div>
  );
}
