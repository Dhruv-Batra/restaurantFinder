import './App.css';
import Main from './components/findDining/Main'
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/findDining/navbar'
import WInput from './components/weather/WInput'
import Home from './components/Home'
import CordsProvider from './contexts/CordsContext';
function App() {

  document.title = "Outing Planner";

//<Route path='/' component={Main} />
//<Route path='/weather' component={WInput} />

  return (
    <div className="App">
     <div className="App-body">
       <Navbar/>
      <br></br>
      <CordsProvider>
        <Switch>
          <Route path='/weather' component={WInput} />
          <Route path='/dining' component={Main} />
          <Route path='/' component={Home} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </CordsProvider>
      </div>  
    </div>
  );
}

export default App;


