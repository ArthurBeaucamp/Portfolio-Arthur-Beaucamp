/**
 * Npm import
 */
import React from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from 'src/components/Sidebar';

import Home from 'src/components/Home';
import Work from 'src/components/Work';

/*
 * Data routes
 */
const routes = {
  '/': {
    nav: 'Home',
    component: Home,
  },
  '/work': {
    nav: 'Work',
    component: Work,
  },
  '/about': {
    nav: 'About',
    component: Home,
  },
  '/contact': {
    nav: 'Contact',
    component: Home,
  },
};

/**
 * Code
 */
class Portfolio extends React.Component {
  /*
   * Code
   */
  state = {
    open: false,
  };

  /*
   * Actions
   */
  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  /*
   * Render
   */
  render() {
    const { open } = this.state;
    return (
      <div id="portfolio" className={classNames({ open })}>
        <div id="sidebar-toggle" onClick={this.handleClick}>||</div>
        <Sidebar routes={routes} />
        <main id="main">
          <Header />
          <div className="container">
            <Switch>
              {Object.keys(routes).map(path => (
                <Route
                  exact
                  key={path}
                  path={path}
                  component={routes[path].component}
                />
              ))}
              <Route render={() => <div>404</div>} />
            </Switch>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

/**
 * Export
 */
export default Portfolio;
