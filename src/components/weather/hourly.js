import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const API_KEY = process.env.REACT_APP_api_key_w;

const useStyles = makeStyles({
    table: {
        'width': '60vw',

    },
});

export default function Hourly({long,lati}){

    const [hour, setHour] = useState({hourly:[{weather:[{description:'fail',icon:'10d'}],temp:'1',feels_like:1}]});

    const classes = useStyles();

    useEffect(() => {
        const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lon", long);
        url.searchParams.append("lat", lati);
        url.searchParams.append("units", "imperial");
        url.searchParams.append("exclude", "current,minutely,daily,alerts");
        fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            setHour(obj);
        });

        console.log(hour.hourly[0].weather[0]);

    }, [long,lati]);

    const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
    }))(TableRow);

    return(
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <StyledTableRow>
                    <StyledTableCell style={{width: '30vh'}}>Hours from Now</StyledTableCell>
                    <StyledTableCell align="right">Icon</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Temperature (F)</StyledTableCell>
                    <StyledTableCell align="right">Feels Like</StyledTableCell>
                </StyledTableRow>
                </TableHead>
                <TableBody>
                {hour.hourly.map((item, index) => (
                    (index <= 23) ? (
                    <StyledTableRow key={item.name}>
                    <StyledTableCell component="th" scope="row">
                        {index+1}
                    </StyledTableCell>
                    <StyledTableCell align="right"><img src={"https://openweathermap.org/img/w/"+item.weather[0].icon+".png"}></img></StyledTableCell>
                    <StyledTableCell align="right">{item.weather[0].description}</StyledTableCell>
                    <StyledTableCell align="right">{item.temp}</StyledTableCell>
                    <StyledTableCell align="right">{item.feels_like}</StyledTableCell>
                    </StyledTableRow>) : <div></div>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );

};