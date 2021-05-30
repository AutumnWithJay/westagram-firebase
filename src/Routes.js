import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginJoon from './Pages/JoonWooPark/Login/Login';
import Register from './Pages/JoonWooPark/Login/Register';
import MainJoon from './Pages/JoonWooPark/Main/Main';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route exact path="/" component={LoginJoon} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/main" component={MainJoon} />
          </>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
