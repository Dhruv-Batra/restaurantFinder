import React, {useState} from "react";
import {TextField, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, makeStyles,Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import clsx from 'clsx';

export default function Inputs(){

    const [searchName, setSearchName] = useState(["Restaurants"]);
    const [value, setValue] = React.useState('female');

    const useStyles = makeStyles({
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        icon: {
          borderRadius: '50%',
          width: 16,
          height: 16,
          boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
          backgroundColor: '#f5f8fa',
          backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
          '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
          },
          'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
          },
          'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
          },
        },
        checkedIcon: {
          backgroundColor: '#009DF3',
          backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
          '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
          },
          'input:hover ~ &': {
            backgroundColor: '#106ba3',
          },
        },
      });

      function StyledRadio(props) {
        const classes = useStyles();
      
        return (
          <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
          />
        );
      }

    const searchTerms = [
        'Restaurants' , 
        'Cafe' , 
        'Bar' ,
      ];

    return(
        <div>
            <u><Typography variant="h5">
                Filters
            </Typography></u>
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
            <br></br><br></br>
            <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <RadioGroup defaultValue="rating" aria-label="sortBy" name="customized-radios">
                <FormControlLabel value="rating" control={<StyledRadio />} label="Rating" />
                <FormControlLabel value="price" control={<StyledRadio />} label="Price" />
                <FormControlLabel value="name" control={<StyledRadio />} label="Name" />
            </RadioGroup>
            </FormControl>

        </div>
    )
}
