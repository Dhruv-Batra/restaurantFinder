import logo from './logo.svg';
import './App.css';
import Main from './components/findDining/Main'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/findDining/navbar'
import WInput from './components/weather/WInput'
function App() {

  document.title = "Find Dining";

//<Route path='/' component={Main} />
//<Route path='/weather' component={WInput} />

  return (
    <div className="App">
     <div class="App-body">
       <Navbar/>
      <br></br>
      <Switch>
        <Route path='/' component={Main} />
        <Route path='/weather' component={WInput} />
      </Switch>
      </div>  
    </div>
  );
}

export default App;


