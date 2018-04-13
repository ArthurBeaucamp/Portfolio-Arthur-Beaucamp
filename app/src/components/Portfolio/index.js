/**
 * Npm import
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Local import
 */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from 'src/components/Sidebar';

import Home from 'src/components/Home';

/*
 * Data routes
 */
const routes = {
  '/': {
    nav: 'Home',
  },
  '/work': {
    nav: 'Work',
  },
  '/about': {
    nav: 'About',
  },
  '/contact': {
    nav: 'Contact',
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
            <Home />
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
