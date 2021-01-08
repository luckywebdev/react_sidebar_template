import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
