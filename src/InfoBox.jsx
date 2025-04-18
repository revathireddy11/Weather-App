import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1635420280816-c0dc0ee8a7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNub3d5fGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon />
                        : info.temp > 15 
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}> 
                    <p>Temperature = {info.temp} &deg;C</p>
                    <p>Humidity = {info.humidity} </p>
                    <p>Min Temperature = {info.tempMin}  &deg;C</p>
                    <p>Max Temperature = {info.tempMax}  &deg;C</p>
                    <p>The weather can be described as <i>{info.weather} </i>and feels like = {info.feelsLike} &deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}