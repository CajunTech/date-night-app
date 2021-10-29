import React from "react";

export default function DrinkDetails(props) {
  const drink = props.drink;

  console.log(drink);
  // listing all the [key,value] pairs of [drink] object.
    const drinkArray = Object.entries(drink);
    // console.log(drinkArray);
  // filter new array for string types
  const filteredDrinks = drinkArray.filter(
    ([key, value]) => typeof value === "string"
  );
//   console.log(filteredDrinks);
  // taking new array through filter looking for 'strIng'
  let ing = filteredDrinks.filter(function (obj) {
    //loop through each object
    let key = obj.keys;
    for (key in obj) {
      //check if object value contains value looking for
      if (obj[key].includes("strIng")) {
        //add this object to the filtered array
        return obj;
      }
    }
  });
// filtering for the measurements
let meas = filteredDrinks.filter(function (obj) {
    //loop through each object
    let key = obj.keys;
    for (key in obj) {
      //check if object value contains value looking for
      if (obj[key].includes("strMeas")) {
        //add this object to the filtered array
        return obj;
      }
    }
  });
  const keys = Object.values(ing)
  for (const key of keys) {
    console.log(key)
  }   
    //   console.log('this is the ', ing[0][1])
    const combined = []
    for (let i = 0; i < ing.length; i++)
        {
        combined.push(meas[i][1]+ ing[i][1])
    }
    // console.log(meas[0][1]);
    console.log(combined)
    

  return (
    <div className="drink-page">
      <div className="drink-container">
        <div className="drink-image">
          <img src={drink.strDrinkThumb} alt="" />
        </div>
        <div className="drink-name">
          <h2>{drink.strDrink}</h2>
              </div>
              
              <div className="make container">
                  {combined.map((combo) => {
                      return (
                          <div className="dd-ing">
                              <p>{ combo}</p>
                          </div>
                      );
                  })}
          <div className="dd-steps">
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
