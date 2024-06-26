import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div classname="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52}/>
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
