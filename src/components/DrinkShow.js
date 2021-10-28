import React from "react";
import "./DrinkShow.css";

export default function DrinkShow(props) {
  const drink = props.drink;
  console.log(drink);
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
                  <button class="btnMake">Make</button>
                  </div>
                  <div className="btnNextDiv">
                  <button class="btnNext">Next</button>
                  </div>
        </div>
      </div>
    </div>
  );
}
