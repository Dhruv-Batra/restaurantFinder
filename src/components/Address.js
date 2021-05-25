import React, {useState, useEffect, useContext} from "react";
import {Button, TextField, Grid} from '@material-ui/core/';
import {CordsContext} from '../contexts/CordsContext';
import CurLoc from './CurLoc'

const goog_key = process.env.REACT_APP_goog_key;

export default function Address(){

    const {cords, setCords} = useContext(CordsContext);
    const [address, setAddress] = useState("Please Enter a Valid Address");

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

    return (
        <div>
            <TextField 
                id="outlined-bassic" 
                label="Address"
                variant="outlined"
                onChange={(e) => handleChange(e)}
            />
            <br></br>
            <br></br>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={5}>
                    <Button
                        onClick={handleClick}
                        variant="contained" 
                        color="primary"
                    >
                    Update Address
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <CurLoc/>
                </Grid>
            </Grid>
        </div>
    )
}