import React, { useState } from "react";

const Cgpa = () => {
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState("Waiting for Input ");
  const calculateCgpa = () => {
    setResult(`${percentage * 9.5}% `);
  };
  return (
    <div className="Container">
      <h1>CGPA Calculator</h1>
      <div>
        <label htmlFor="cgpaValue">CGPA: </label>
        <input
          id="cgpaValue"
          type="text"
          placeholder="Enter your CGPA"
          onChange={(e) => {
            setPercentage(e.target.value);
          }}
        />
      </div>

      <br />
      <button onClick={calculateCgpa}>Calculate</button>
      <div>
        <br />
        <span>Percentage:</span>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Cgpa;