import React, {useState, useEffect} from "react";
import {TextField, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, makeStyles,Typography, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import clsx from 'clsx';
import Address from '../Address'

export default function Inputs({setCords, setSearch,setSort}){

    const [value, setValue] = useState(['']);
    const [sorty, setSorty] = useState('');

    useEffect(() => {
        return setSort(sorty);
    },[sorty])


    function handleSearch(){
        return setSearch(value);
    }

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

    const handleChangeSearch = (e,v) => {
        return setValue(v);
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
            <Address/>
            <br></br><br></br>
            <FormControl>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={searchTerms}
                    defaultValue={[searchTerms[0]]}
                    filterSelectedOptions
                    onChange={(e,v) => handleChangeSearch(e,v)}
                    size= 'small'
                    renderInput={(searchTerms) => (
                    <TextField
                        {...searchTerms}
                        variant="outlined"
                        label="Filter Selected Options"
                    />
                    )}
                />
            </FormControl>
            <br></br><br></br>
            <Button
                onClick={() => handleSearch()}
                variant="contained" 
                color="primary"
            >
            Update Search Term
            </Button>
            <br></br><br></br>
            <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <RadioGroup aria-label="sortBy" name="customized-radios" onChange={(e)=>setSorty(e.target.value)}>
                <FormControlLabel value="rating" control={<StyledRadio />} label="Rating" />
                <FormControlLabel value="price" control={<StyledRadio />} label="Price" />
                <FormControlLabel value="name" control={<StyledRadio />} label="Name" />
            </RadioGroup>
            </FormControl>

        </div>
    )
}