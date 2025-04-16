import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import LooksIcon from '@mui/icons-material/Looks';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://media.istockphoto.com/id/1289450791/photo/trees-covered-with-ice-after-freezing-rain-in-vladivostok-russia-sparkling-ice-covered.jpg?s=612x612&w=0&k=20&c=iU8kEi_sF1bNlUvtFGU5-DQkKHXVBKV6ZaRAOy5fUaA=";
  const RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 35 ?HOT_URL : info.temp > 10 ? INIT_URL:COLD_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp > 35 ?<SunnyIcon></SunnyIcon> : info.temp > 10 ? <LooksIcon ></LooksIcon>:<AcUnitIcon></AcUnitIcon>}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>City: {info.city}</div>
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humidity: {info.humidity}</div>
            <div>Pressure: {info.pressure}</div>
            <div>Ground Level: {info.groundLevel} m</div>
            <div>Sea Level: {info.seaLevel} m</div>
            <div>Max Temp: {info.tempMax}&deg;C</div>
            <div>Min Temp: {info.tempMin}&deg;C</div>
            <div>Wind Speed: {info.windSpeed} km/h</div>
            <div>
              Description: The Weather is describe as {info.desc} and feels like{" "}
              {info.feelLike}&deg;C
            </div>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
