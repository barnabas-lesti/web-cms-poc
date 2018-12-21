import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';

import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
