import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css"  
import { useState } from "react";
import { jsx } from "@emotion/react";
export default function SearchBox({updateInfo}) {
  const[city,setCity] = useState("");
  const[error,setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "199ff62a99e0567147c1bf2402f525c2";
 
  let getWeatherInfo =  async(city)=>{
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponce = await response.json();
    let result = {
      city : city,
      temp : jsonResponce.main.temp,
      tempMin : jsonResponce.main.temp_min,
      tempMax : jsonResponce.main.temp_max,
      feelLike : jsonResponce.main.feels_like,
      groundLevel : jsonResponce.main.grnd_level,
      humidity : jsonResponce.main.humidity,
      pressure : jsonResponce.main.pressure,
      seaLevel : jsonResponce.main.sea_level,
      desc :jsonResponce.weather[0]. description,
      windSpeed : jsonResponce.wind.speed,
    }
    console.log(result);
    return result;
    }catch(err){
      throw err;
    }
  }
 

  let handleChange = (event)=>{
    setCity(event.target.value);
  }

  let handleSubmit = async(event)=>{
     try{
      event.preventDefault();
      console.log(city);
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo); 
      setCity("");
     }catch(err){
      setError(true);
     }
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button> 
        {error && <p style={{color:"red"}}>No Such Places in our API.</p>}
      </form>
    </div>
  );
}
