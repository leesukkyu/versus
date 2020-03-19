import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Progressbar from '@Components/progressbar/Progressbar';

import Index from '@Pages/Index';

import './App.scss';

export default function App() {
  return (
    <>
      <Progressbar />
      <Router>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </>
  );
}
