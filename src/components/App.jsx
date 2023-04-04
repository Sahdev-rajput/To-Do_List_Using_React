import React, { useState } from "react";

function App() {
  const [myarr, setarr] = useState([]);
  const [text, settext] = useState("");
  function gettext(event) {
    settext(event.target.value);
  }
  function changeit() {
    setarr((arr) => [...arr, text]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={gettext} />
        <button onClick={changeit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {myarr.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
