import React, { useState } from "react";
import axios from "axios";
//import { TailSpin } from "react-loader-spinner";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./weatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);

  let [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function search(event) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=889c7f3ed9dacba9e272eab879e0a867&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.loaded) {
    return (
      <div className="wrap">
        <header className="header">
          <section className="city-suggestions">
            <a href="/">Abia</a>
            <a href="/">Berlin</a>
            <a href="/">Paris</a>
            <a href="/">Johannesburg</a>
            <a href="/">Kuwait</a>
          </section>
          <div className="search-current-wrap">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="search"
                className="city-input"
                placeholder="City"
                autoComplete="off"
                onChange={updateCity}
              />

              <input type="submit" className="btn-warning" value="Search" />
            </form>

            <div className="current-btn">
              <input type="submit" className="btn-warning" value="Current" />
            </div>
          </div>
        </header>

        <main className="main">
          <WeatherInfo data={weather} />

          <WeatherForecast coords={weather.coordinates} />
        </main>
        <footer className="footer">
          <p>
            Page was built by
            <a
              href="https://www.linkedin.com/in/emeh-glory-chiamaka-9586b0aa"
              className="footerlink"
              target="_blank"
              rel="noreferrer"
            >
              Emeh Glory Chiamaka
            </a>
          </p>
          <a
            href="https://github.com/emehglorychiamaka/weather-react"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open Source Code on github
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return `loading...`;
    //<h3>
    //<TailSpin
    // height="80"
    //width="80"
    //color="#4fa94d"
    //ariaLabel="tail-spin-loading"
    //radius="1"
    //wrapperStyle={{}}
    //wrapperClass=""
    //visible={true}
    //timeout="3000" //3secs
    ///>
    //</h3>;
  }
}
