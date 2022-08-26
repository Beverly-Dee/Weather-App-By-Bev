import React from "react";

const Layout = ({ weatherData }) => {
  const {
    name,
    country,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    pressure,
    lat,
    lon,
    description,
    icon,
    sunrise,
    sunset,
    deg,
  } = weatherData;

  return (
    <>
      <div className="container1">
        <div className="container2">
          <h2 id="name1">{`${name}`}</h2>
          <h3 id="name2">{`${country}`}</h3>
          <div className="padding-top-bottom">
            <i className={`wi ${icon}`}></i>
          </div>

          <h2 className="description">{description}</h2>

          <h2 className="alien">
            <i className="wi wi-alien"></i>
            {`Temp: ${temp}`}&deg;C
          </h2>
          <h5 id="stars">
            <i className="wi wi-stars"></i>
            {`Min/Max: ${temp_min} | ${temp_max}`}
          </h5>
          <h6 id="meteor">
            <i className="wi wi-meteor"></i>
            {`Feels like: ${feels_like}`}&deg;C
          </h6>
          <h6 id="fire">
            <i className="wi wi-fire"></i>
            {`Humidity: ${humidity}`}%
          </h6>
          <h6 id="cloud">
            <i className="wi wi-cloud-down"></i>
            {`Pressure: ${pressure} `}hPa
          </h6>
          <h6 id="earthquake">
            <i className="wi wi-earthquake"></i>
            {`lat: ${lat} - lon: ${lon}`}
          </h6>

          <h6 id="sunrise">
            <i className="wi wi-horizon-alt"></i>
            {`Sunrise: ${sunrise} `}
          </h6>
          <h6 id="sunset">
            <i className="wi wi-horizon"></i>
            {`Sunset: ${sunset} `}
          </h6>
          <h6 id="wind">
            <i className="wi wi-strong-wind"></i>
            {`Wind: ${deg} `}&deg;
          </h6>
        </div>
      </div>
    </>
  );
};

export default Layout;
