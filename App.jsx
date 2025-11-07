// import { useState } from 'react'

import "./commonResource/style.css";
import FoodItem from "./Components/FoodItem";
import FoodItemTitle from "./Components/FoodItemtitle";
import Yoseph from "./commonResource/data.js";

function App() {
  return (
    <div className="all-container">
      <FoodItemTitle />
      <div className="foods-container">
        {Yoseph.map(function (item, index) {
          return (
            <FoodItem
            key={index}
            {...item}
              // img={item.img}
              // title={item.title}
              // price={item.price}
              // desc= {item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
