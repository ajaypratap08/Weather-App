import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
  const[weatherInfo,setWeatherInfo] = useState({
    city: "Tokoyo",
    desc: "scattered clouds",
    feelLike: 31.85,
    groundLevel: 956,
    humidity: 49,
    pressure: 1012,
    seaLevel: 1012,
    temp: 30.64,
    tempMax: 30.64,
    tempMin: 30.64,
    windSpeed: 1.19,
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
  }
  return (<div>
    <h3>Weather App By Ajay!</h3>
    <SearchBox updateInfo={updateInfo}></SearchBox>
    <InfoBox info = {weatherInfo}></InfoBox>
  </div>)
}