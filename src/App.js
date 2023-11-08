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
        <div className="row excuse-holder">
          <h2> Generate an excuse </h2>
          <button className="inputNameButton" onClick={fetchData}>
            Family
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Office
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Children
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            College
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Party
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Funny
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Unbelievable
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Developers
          </button>
          <button className="inputNameButton" onClick={fetchData}>
            Gaming
          </button>
        </div>

        <div className="row">
          <h2>
            {" "}
            Here is an excuse to get out of your {reason?.category} event:
          </h2>

          <p>{reason?.excuse} </p>
        </div>

        <div className="row">
          <h3 className="api-response">Data Fetched from API:</h3>
          <pre>{JSON.stringify(reason, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
