import React from "react";

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

  return (
    <React.Fragment>
      <div>Pogoda dla: {city}</div>
      <div>Temperatura: {Math.ceil(temp)} °C</div>
    </React.Fragment>
  );
};

export default Result;
