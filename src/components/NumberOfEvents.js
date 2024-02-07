// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [query, setQuery] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;

    setQuery(value);

    let errorText;
    if (isNaN(value)) {
      errorText = "Please input a number value."
    } else if (value <= 0) {
      errorText = "Please input a number value greater than 0."
    } else {
      errorText = ""
      setCurrentNOE(value);
    }
    setErrorAlert(errorText)
  }
  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input
        type="text"
        className="number-of-events"
        value={query}
        onChange={handleInputChanged}
      />
    </div>
  )
};

export default NumberOfEvents;