/** @format */

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [situation, setSituation] = useState("");
  const [reason, setReason] = useState(null);

  const fetchData = (event) => {
    var situationValue = event.target.textContent.trim();
    situationValue = situationValue.toLowerCase();
    console.log(situationValue);
    setSituation(situationValue);

    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${situationValue}/`)
      .then((res) => {
        setReason(res.data[0]);
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
        <h2> Here is an excuse to get out of your {reason?.category} event:</h2>
        <p>{reason?.excuse} </p>
        <h3>All fetched data:</h3>
        <pre>{JSON.stringify(reason, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
