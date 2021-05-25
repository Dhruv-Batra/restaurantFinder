import logo from './logo.svg';
import './App.css';
import Main from './components/findDining/Main'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/findDining/navbar'
import WInput from './components/weather/WInput'
import Home from './components/Home'
function App() {

  document.title = "Outing Planner";

//<Route path='/' component={Main} />
//<Route path='/weather' component={WInput} />

  return (
    <div className="App">
     <div class="App-body">
       <Navbar/>
      <br></br>
      <Switch>
        <Route path='/weather' component={WInput} />
        <Route path='/dining' component={Main} />
        <Route path='/' component={Home} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
      </div>  
    </div>
  );
}

export default App;


