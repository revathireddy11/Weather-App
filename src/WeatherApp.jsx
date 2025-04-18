import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        feelsLike: 39.2,
        temp: 41.22,
        tempMin: 41.22,
        tempMax: 41.22,
        humidity: 14,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}