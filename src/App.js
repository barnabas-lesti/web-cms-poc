import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './client/components/layout/Header';
import Footer from './client/components/layout/Footer';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <Component {...props} {...rest} />
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
