
import React, { useState } from "react";

const HeightWeight = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightResult, setHeightResult] = useState("Waiting");
  const [weightResult, setWeightResult] = useState("Waiting");

  const heightHandler = () => {
    if (height.length !== 0) {
      setHeightResult(height * 0.0328084 + " feet");
    } else {
      alert("please provide height");
    }
  };
  const weightHandler = () => {
    if (weight.length !== 0) {
      setWeightResult(weight * 0.453592 + " kilograms");
    } else {
      alert("please provide weight");
    }
  };
  return (
    <div className="Container">
      <h1>Height/Weight Calculator</h1>
      <div>
        <label htmlFor="height">Height(in cms): </label>
        <input
          type="text"
          id="height"
          placeholder="Enter your Height"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>
      <br />
      <button onClick={heightHandler}>Convert To Feet </button>
      <h3>Result: {heightResult}</h3>

      <div>
        <br />
        <label htmlFor="weight">Weight(in lbs): </label>
        <input
          type="text"
          id="weight"
          placeholder="Enter your Weight"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </div>
      <br />

      <button onClick={weightHandler}>Convert To Kilograms </button>
      <h3>Result: {weightResult}</h3>
    </div>
  );
};

export default HeightWeight;



