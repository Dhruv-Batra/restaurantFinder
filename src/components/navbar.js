import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <div>
        <header className="App-header">
          <h2>Find Dining</h2>
          <div class="navbaar">
            <Button to="/" variant="contained">Home</Button>
            <Button href="/weather" variant="contained">Check the Weather</Button>
          </div>
          <br></br>
        </header>
        <br></br>
      </div>
    );
  };