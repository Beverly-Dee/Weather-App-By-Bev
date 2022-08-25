import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import Layout from "./Layout";
import "weather-icons/css/weather-icons.css";
import Alert from "./Alert";
//import NinjaBus from "./NinjaBus";

const GetWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [message, setMessage] = useState('');
  //const [NarutoShout, setNarutoShout] = useState('Believe it! Dattebayo!')

  useEffect(() => {
    const firstLoadOfData = async () => {
      const city = "Cape Town";
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`
      );
      manipulatingData(res.data);
    };
    firstLoadOfData();
    //eslint-disable-next-line
  }, []);

  const findWeatherByCity = async (city) => {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`
      );


      manipulatingData(res.data);
    } catch (error) {
      if (error) {
        getAlertMessage('City not on WorldWeather list')
        
      }
    }
  };


  const manipulatingData = (result) => {
    console.log(result);
    const { name } = result;
    const { country } = result.sys;
    const { temp, temp_min, temp_max, feels_like, humidity, pressure } =
      result.main;
    const { lat, lon } = result.coord;
    const { description, id } = result.weather[0];
    const { sunrise } = result.sys;
    const { sunset } = result.sys;
    const { deg, } = result.wind;


    setWeatherData({
      name: name,
      country: country,
      temp: Math.floor(temp),
      temp_min: temp_min.toFixed(0),
      temp_max: temp_max.toFixed(0),
      feels_like: feels_like.toFixed(0),
      humidity: humidity,
      pressure,
      lat,
      lon, 
      description,
      icon: getWeatherIcon (id),
      sunrise: new Date (sunrise*1000).toLocaleTimeString(),
      sunset: new Date (sunset*1000).toLocaleTimeString(),
      deg: getWindIcon (deg),
    });
  };
  

  const getWeatherIcon = (rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        return "wi-thunderstorm";
      case rangeId >= 300 && rangeId <= 321:
        return "wi-sleet";
      case rangeId >= 500 && rangeId <= 531:
        return "wi-storm-showers";
      case rangeId >= 600 && rangeId <= 622:
        return "wi-snow";
      case rangeId >= 701 && rangeId <= 781:
        return "wi-fog";
      case rangeId === 800:
        return "wi-day-sunny";
      case rangeId >= 801 && rangeId <= 804:
        return "wi-day-fog";
      default:
        return "wi-day-fog";
    }
  };


  const getWindIcon = (degrees) => {
    switch (true) {
      case degrees >= 0 && degrees <= 45:
        return "N 0";
      case degrees >= 46 && degrees <= 90:
        return "NE 45";
      case degrees >= 91 && degrees <= 135:
        return "E 90";
      case degrees >= 136 && degrees <= 180:
        return "SE 135";
      case degrees >= 181 && degrees <= 225:
        return "S 180";
      case degrees >= 226 && degrees <= 270:
        return "SW 225";
      case degrees >= 271 && degrees <= 313:
        return "W 270";

      default:
        return "N 0";
    }
  };

 const getAlertMessage = (msg)  => {
 setMessage(msg);
 setTimeout(() => setMessage(null), 2000);
 };
  return (
    <>
      <Form findWeatherByCity={findWeatherByCity} getAlertMessage={getAlertMessage} />
      <Alert message={message} />
      <Layout weatherData={weatherData} />
    </>
  );
};

export default GetWeather;
