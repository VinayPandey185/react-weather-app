import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.location.name}, {data.location.country}</h2>
      <p>🌡️ Temp: {data.current.temperature} °C</p>
      <p>☁️ Weather: {data.current.weather_descriptions[0]}</p>
      <p>💨 Wind: {data.current.wind_speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
