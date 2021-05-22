import React, {useState} from "react";
import {TextField, FormControl } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function Inputs(){

    const [searchName, setSearchName] = useState(["Restaurants"]);

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
                label="Search Radius (meters)"
                type="number"
                defaultValue="1500"
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
