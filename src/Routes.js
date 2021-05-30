import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginJoon from './Pages/JoonWooPark/Login/Login';
import MainJoon from './Pages/JoonWooPark/Main/Main';
import './styles/reset.scss';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-joon" component={LoginJoon} />
          <Route exact path="/main-joon" component={MainJoon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
