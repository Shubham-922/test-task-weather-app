import React from 'react';
import wind from '../Assets/wind.png';
import humidityy from '../Assets/humidity.png'

const WeatherDetails = ({ temp, city, humidity, windSpeed }) => (
  <div className="weather">
    <h1 className="temp">{temp}°C</h1>
    <h2 className="city">{city}</h2>
    <div className="details">
      <div className="col">
        <img src={ humidityy } alt="" />
        <div>
          <p className="humidity">{ humidity }%</p>
          <p>humidity</p>
        </div>
      </div>
      <div className="col">
        <img src={wind} alt="" />
        <div>
          <p className="wind">{windSpeed} km/h</p>
          <p>wind speed</p>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherDetails;