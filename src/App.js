import { useState } from "react";
import "./App.css";
import Bmi from "./components/Bmi";
import Cgpa from "./components/Cgpa";
import HeightWeight from "./components/Height_Weight";

function App() {
  const [option, setOption] = useState("Select An Option");
  const proceed = () => {
    if (option === "BMI") {
      return <Bmi />;
    } else if (option === "CGPA") {
      return <Cgpa />;
    } else if (option === "HEIGHT-WEIGHT") {
      return <HeightWeight />;
    } else {
      return <h2>Please Select an option from dropdown</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Multi Calculator</h1>
      <span>
        Calculate =
        <select onChange={(e) => setOption(e.target.value)}>
          <option>BMI</option>
          <option>CGPA</option>
          <option>HEIGHT-WEIGHT</option>
        </select>
      </span>

      <div>{proceed()}</div>
    </div>
  );
}

export default App;
