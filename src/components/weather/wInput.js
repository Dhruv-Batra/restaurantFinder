import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Current from './Current';
import Button from "@material-ui/core/Button";
import Hourly from './Hourly';
const API_KEY = process.env.REACT_APP_api_key_w;

export default function WInput(w){
    const [showCurrent, setShowCurrent] = useState(false)
    const [showHourly, setShowHourly] = useState(false)

    const [weather, setWeather] = useState(null);
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLon(position.coords.longitude);
            setLat(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    
        if(lat==null||lon==null){
            return(
                <div>
                    <h1>Error</h1>
                    <h2>Please Allow Location Services for this Website</h2>
                    <h3><a href="https://www.lifewire.com/denying-access-to-your-location-4027789">Helpful Article</a></h3>
                    <img src="https://t3.ftcdn.net/jpg/01/28/36/52/360_F_128365273_0PhzzfSuq3NJbDbaNqE4yv5hlXEyHBN8.webp"></img>
                </div>
            );
        }
    },[]);
    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    return(lon&&lat&&(
        <div>
            <TextField id="standard-basic" label="Latitude" defaultValue={lat}
                onChange={e=>{setLat(e.target.value)}}
            />
            <TextField id="standard-basic" label="Longitude" defaultValue={lon}
                onChange={e=>{setLon(e.target.value)}}
            />
            <br></br><br></br>
      
            {showCurrent ? <div><Button
                onClick={() => {setShowCurrent(false)}}
                variant="contained"
                color="primary"
            >
                Current Weather
            </Button><Current
                long={lon}
                lati={lat}
            /></div> : 
            <Button
                onClick={() => {setShowCurrent(true)}}
                variant="contained"
                color="primary"
            >
                Current Weather
            </Button>}

            <br></br><br></br>

            {showHourly ? <div><Button
                onClick={() => {setShowHourly(false)}}
                variant="contained"
                color="primary"
            >
                Hourly Forecast
            </Button><Hourly
                long={lon}
                lati={lat}
            /></div> : 
            <Button
                onClick={() => {setShowHourly(true)}}
                variant="contained"
                color="primary"
            >
                Hourly Forecast
            </Button>}
                </div>
            ));

};