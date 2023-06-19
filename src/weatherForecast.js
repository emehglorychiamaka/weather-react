import React, { useState } from "react";

import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=889c7f3ed9dacba9e272eab879e0a867&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
