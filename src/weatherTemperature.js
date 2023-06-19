import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <>
        <h2>
          <span className="current-temp-number">
            {Math.round(props.celsius)}
          </span>
          <span className="units">
            °C |{" "}
            <a href="/" onClick={toFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <>
        <h2>
          <span className="current-temp-number">
            {Math.round(fahrenheitTemp)}
          </span>
          <span className="units">
            <a href="/" onClick={toCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </h2>
      </>
    );
  }
}
