 import './App.css'
import WeatherApp from "./WeatherApp"
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  return (<div style={{textAlign:"center"}}>
    <WeatherApp></WeatherApp>
    <h3>Made with <FavoriteIcon /> By Ajay</h3>
   </div>)
}

export default App
