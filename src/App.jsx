import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
import HostPage from './components/HostPage';

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/HostPage' component={HostPage} />
      </Switch>
    </div>
    
  );
}

export default App;

