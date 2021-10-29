import React from "react";

export default function DrinkDetails(props) {
  const drink = props.drink;
  // listing all the [key,value] pairs of [drink] object.
  const drinkArray = Object.entries(drink);
  // filter new array for string types
  const filteredDrinks = drinkArray.filter(
    ([key, value]) => typeof value === "string"
  );
  // taking new array through filter looking for 'strIng'
  let ing = filteredDrinks.filter(function (obj) {
    //loop through each object
    let key = obj.keys;
    for (key in obj) {
      //check if object value contains value needed
      if (obj[key].includes("strIng")) {
        //add this object to the filtered array
        return obj;
      }
    }
  });
  // filtering for the measurements string
  let meas = filteredDrinks.filter(function (obj) {
    let key = obj.keys;
    for (key in obj) {
      if (obj[key].includes("strMeas")) {
        return obj;
      }
    }
  });
  // create new array to hold the combined ingredients
  const combined = [];
  for (let i = 0; i < ing.length; i++) {
    combined.push(meas[i][1] + " - " + ing[i][1]);
  }
 
  return (
    <div className="drink-page">
      <div className="drink-container">
        <div className="drink-image">
          <img src={drink.strDrinkThumb} alt="" />
        </div>
        <div className="drink-name">
          <h2>{drink.strDrink}</h2>
        </div>
        <div
          style={{
            borderTop: "1px solid #f1580c ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <div className="make-container">
          {combined.map((combo) => {
            return (
              <div className="dd-ing">
                <p>{combo}</p>
              </div>
            );
          })}
          <div
            style={{
              borderTop: "1px solid #f1580c ",
              marginLeft: 20,
              marginRight: 20,
            }}
          ></div>
          <div className="dd-steps">
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
