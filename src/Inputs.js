import React, {useState} from "react";
import {Button, Select, TextField, FormControl } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function Inputs(){

    const [searchName, setSearchName] = React.useState(["Restaurants"]);

    const searchTerms = [
        'Restaurants' , 
        'Cafe' , 
        'Bar' ,
      ];

    return(
        <div>
            <br></br>
            <TextField 
                id="outlined-bassic" 
                label="Address"
                variant="outlined" 
            />
            <br></br>
            <br></br>
            <TextField
                id="outlined-number"
                label="Search Radius (miles)"
                type="number"
                defaultValue="5"
                variant="outlined"
            />
            <br></br>
            <br></br>
            <FormControl>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={searchTerms}
                    defaultValue={[searchTerms[0]]}
                    filterSelectedOptions
                    renderInput={(searchTerms) => (
                    <TextField
                        {...searchTerms}
                        variant="outlined"
                        label="filterSelectedOptions"
                    />
                    )}
                />
            </FormControl>

        </div>
    )
}
