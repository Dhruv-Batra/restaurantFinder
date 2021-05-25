import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Current from './Current';
import Button from "@material-ui/core/Button";
import Hourly from './Hourly';
const API_KEY = process.env.REACT_APP_api_key_w;
const goog_key = process.env.REACT_APP_goog_key;

export default function WInput(w){
    const [showCurrent, setShowCurrent] = useState(false)
    const [showHourly, setShowHourly] = useState(false)

    const [weather, setWeather] = useState(null);
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);

    const [address, setAddress] = useState("Please Enter a Valid Address");
    const [cords, setCords] = useState(['-78.507','38.033']);

    useEffect(() => {
        
    
        if(lat==null||lon==null){
            try{
                navigator.geolocation.getCurrentPosition(function(position) {
                    setLon(position.coords.longitude);
                    setLat(position.coords.latitude);
                    console.log(position.coords.longitude);
                });
            }
            catch{
                return(
                    <div>
                        <h1>Error</h1>
                        <h2>Please Allow Location Services for this Website</h2>
                        <h3><a href="https://www.lifewire.com/denying-access-to-your-location-4027789">Helpful Article</a></h3>
                        <img src="https://t3.ftcdn.net/jpg/01/28/36/52/360_F_128365273_0PhzzfSuq3NJbDbaNqE4yv5hlXEyHBN8.webp"></img>
                    </div>
            );}
        }
    },[]);
    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    function handleClick(){
        try{
            const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");
            url.searchParams.append("address", address);
            url.searchParams.append("key", goog_key);
            fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                return (obj['results'][0].geometry.location);
            }).then((loc) => {
                return setCords([loc['lng'], loc['lat']])
            });   
        }catch(e){
            console.log('Invalid Address')
        }
    }

    const handleChange = (e) => {
        return setAddress(e.target.value);
    }

    return(lon&&lat&&(
        <div>
            <TextField 
                id="outlined-bassic" 
                label="Address"
                variant="outlined"
                onChange={(e) => handleChange(e)}
            />
            <br></br>
            <br></br>
            <Button
                onClick={handleClick}
                variant="contained" 
                color="primary"
            >
            Update Address
            </Button>
            <br></br>
            <br></br>
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