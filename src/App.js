import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {

  document.title = "Find Dining";

  return (
    <div className="App">
      <header className="App-header">
        <h2>Find Dining</h2>
      </header>
      <div className="App-body">
        <br></br>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
