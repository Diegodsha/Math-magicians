import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Error from './Error';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default App;
