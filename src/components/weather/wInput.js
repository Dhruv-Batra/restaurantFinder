import React, { useEffect, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Current from './Current';
import Button from "@material-ui/core/Button";
import Hourly from './Hourly';
import {CordsContext} from '../../contexts/CordsContext';
import CurLoc from '../CurLoc';
import Address from '../Address'
const API_KEY = process.env.REACT_APP_api_key_w;
const goog_key = process.env.REACT_APP_goog_key;

export default function WInput(w){
    const [showCurrent, setShowCurrent] = useState(false)
    const [showHourly, setShowHourly] = useState(false)

    const [weather, setWeather] = useState(null);
    //const [cords, setCords] = useState(['-78.507','38.033']);
    const {cords, setCords} = useContext(CordsContext);

    const [lon, setLon] = useState(cords[0]);
    const [lat, setLat] = useState(cords[1]);

    useEffect(() => {
        setCords([lon,lat])
    },[lat,lon])

    useEffect(() => {
        setLon(cords[0]);
        setLat(cords[1]);
    },[cords])

    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    return(cords&&lon&&lat&&(
        <div>
            <Address/>
            <br></br><br></br>
            <CurLoc/>
            <br></br><br></br>
            <Current
                long={lon}
                lati={lat}
            />
            <br></br><br></br>
            <Hourly
                long={lon}
                lati={lat}
            />
        </div>
    ));

};