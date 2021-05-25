import React, { useEffect, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Current from './Current';
import Button from "@material-ui/core/Button";
import Hourly from './Hourly';
import {CordsContext} from '../../contexts/CordsContext'
const API_KEY = process.env.REACT_APP_api_key_w;
const goog_key = process.env.REACT_APP_goog_key;

export default function WInput(w){
    const [showCurrent, setShowCurrent] = useState(false)
    const [showHourly, setShowHourly] = useState(false)

    const [weather, setWeather] = useState(null);
    //const [cords, setCords] = useState(['-78.507','38.033']);
    const {cords, setCords} = useContext(CordsContext);
    const [address, setAddress] = useState("Please Enter a Valid Address");

    const [lon, setLon] = useState(cords[0]);
    const [lat, setLat] = useState(cords[1]);

    useEffect(() => {
        setCords([lon,lat])
    },[lat,lon])

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

    return(cords&&lon&&lat&&(
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