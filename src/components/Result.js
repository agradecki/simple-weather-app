import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <React.Fragment>
        <h2>
          Wyniki wyszukiwnia dla miasta <em>{city}</em>
        </h2>
        <h4>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {Math.ceil(temp)} &#176;C</h4>
        <h4>Wschód slońca dzisiaj o: {sunriseTime}</h4>
        <h4>Zachód slońca dzisiaj o: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <h4>Aktualne ciśnienie: {pressure} hPa</h4>
      </React.Fragment>
    );
  }

  return (
    <div className="result">
      {err ? `Nie mamy w bazie miasta ${city}` : content}
    </div>
  );
};

export default Result;
