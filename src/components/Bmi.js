import React, { useState } from "react";

const Bmi = () => {
  const [age, setAge] = useState(0);
  const [weight, Setweight] = useState(0);
  const [gender, setGender] = useState("Select-Gender");
  const [height, Setheight] = useState(Number("0"));
  const [bmiStatus, setbmiStatus] = useState("Waiting...");
  const [bmi, setBmi] = useState(0);

  const genderHandler = (e) => {
    e.preventDefault();
    setGender(e.target.value);
    console.log(e.target.value);
  };
  const resetHandler = () => {
    setAge(0);
    setGender("male");
    setBmi(0);
    setbmiStatus("Waiting");
    Setheight(0);
    Setweight(0);
    document.getElementById("h3").style.color = "black";
  };
  const calculateHandler = () => {
    const bmi = weight / (0.0254 * 0.0254 * (height * height));

    if (gender === "Select-Gender") {
      alert("Please select a gender");
      setBmi("Please select a gender");
    } else {
      if (isNaN(bmi)) {
        alert("Invalid input");
        setBmi("Invalid input");
        resetHandler();
      } else {
        setBmi(bmi);
        if (gender === "male") {
          if (bmi <= 18.5) {
            setbmiStatus("Underweight");
            document.getElementById("h3").style.color = "grey";
          } else if (bmi > 18.5 && bmi <= 24.9) {
            setbmiStatus("Normal Weight");
            document.getElementById("h3").style.color = "green";
          } else if (bmi > 24.9 && bmi <= 29.5) {
            setbmiStatus("OverWeight");
            document.getElementById("h3").style.color = "orange";
          } else if (bmi >= 30) {
            setbmiStatus("Obesity");
            document.getElementById("h3").style.color = "red";
          }
          setAge(0);
          setGender("male");
          Setheight(0);
          Setweight(0);
        } else if (gender === "female") {
          if (bmi < 20.5) {
            setbmiStatus("Underweight");
            document.getElementById("h3").style.color = "grey";
          } else if (bmi > 20.6 && bmi <= 26.9) {
            setbmiStatus("Normal Weight");
            document.getElementById("h3").style.color = "green";
          } else if (bmi > 27 && bmi <= 31) {
            setbmiStatus("OverWeight");
            document.getElementById("h3").style.color = "orange";
          } else if (bmi > 32) {
            setbmiStatus("Obesity");
            document.getElementById("h3").style.color = "red";
          }
          setAge(0);
          setGender("male");
          Setheight(0);
          Setweight(0);
        }
      }
    }
  };
  return (
    <div className="Container">
      <h1>BMI Calculator</h1>
      <div>
        <div>
          <div>
            <span>Age(years): </span>
            <input
              type="number"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Gender: </span>
            <select value={gender} onChange={genderHandler} required>
              <option value="Select-Gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="div">
            <span>Height(in): </span>
            <input
              type="text"
              required
              placeholder="height"
              value={height}
              onChange={(e) => {
                Setheight(e.target.value);
              }}
            />
          </div>
          <div className="div">
            <span>Weight(kg): </span>
            <input
              type="text"
              placeholder="weight"
              required
              value={weight}
              onChange={(e) => {
                Setweight(e.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={calculateHandler}>
            bmi
          </button>
          <button type="reset" onClick={resetHandler}>
            reset
          </button>
        </div>

        <div>
          <h3 id="h3">BMI:{bmi}</h3>
          <h4>Result:{bmiStatus}</h4>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
