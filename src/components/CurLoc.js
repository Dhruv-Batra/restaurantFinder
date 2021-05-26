import React, {useContext} from "react";
import {Button} from '@material-ui/core/';
import {CordsContext} from '../contexts/CordsContext';

export default function CurLoc(){

    const {setCords} = useContext(CordsContext);

    function currentCords(){
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log((position.coords.longitude));
            return setCords([(position.coords.longitude).toFixed(3),(position.coords.latitude).toFixed(3)]);
        });
    }

    return(
        <div>
            <Button
                onClick={currentCords}
                variant="contained" 
                color="primary"
                >
                Current Location
            </Button>
        </div>
    )
}