/** @format */

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");
  const [reason, setReason] = useState(null);

  const fetchData = (event) => {
    const excuseValue = event.target.textContent.trim();
    setExcuse(excuseValue);

    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setReason(res.data.excuse);
        console.log(res.data);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h2> Generate an excuse </h2>
        <button className="inputNameButton" onClick={fetchData}>
          Family
        </button>
        <h2> Here is an excuse to get out of your {excuse} event:</h2>
        <p>{reason} </p>
      </div>
    </div>
  );
}

export default App;
