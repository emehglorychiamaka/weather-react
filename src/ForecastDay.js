import React from "react";
import WeatherIcon from "./weatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <>
      <div className="day">
        <h3>{day()}</h3>
        <div className="forecast-icon">
          {" "}
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <h5 className="temp">
          <span className="temp-max">{maxTemp()}</span>
          <span className="temp-min">{minTemp()}</span>
        </h5>
      </div>
    </>
  );
}
