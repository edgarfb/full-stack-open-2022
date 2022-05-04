import { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  useEffect(() => {
    axios(url).then((data) => setWeather(data.data));
  }, [country]);

  const toCelcius = (kelvin) => Math.round(kelvin - 273, 15);

  return (
    <div>
      {weather !== null && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature {toCelcius(weather.main.temp)} Celcius </p>
          <p>{weather.weather[0].description}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
