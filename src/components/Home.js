import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home_container">
      <div className="home_drink">
        <img
          className="drinkImg"
          src="/images/liquor/liquor6.png"
          alt="dna logo"
        />

        <button
          onClick={() => props.history.push("/drink")}
          className="btnNext"
        >
          Drink?
        </button>
      </div>

      <div className="home_combo">
              <img className="comboImg" src="/images/combo/combo5.png" alt="combo" />
              <button
        //   onClick={() => props.history.push("/random")}
          className="btnNext"
        >
          Both..
        </button>
          </div>
          
      <div className="home_meal">
              <img className="mealImg" src="/images/dining/dining5.png" alt="meal" />
              <button
          onClick={() => props.history.push("/meal")}
          className="btnNext"
        >
          Food?
        </button>
      </div>
     
    </div>
  );
}
