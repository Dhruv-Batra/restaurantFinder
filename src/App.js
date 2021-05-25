import logo from './logo.svg';
import './App.css';
import Main from './components/findDining/Main'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/findDining/navbar'
import { Button } from "@material-ui/core";
function App() {

  document.title = "Find Dining";

  return (
    <div className="App">
      <div className="App-body">
        <br></br>
        <div>
        <Navbar/>
        <br></br>
      </div>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
