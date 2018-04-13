/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from 'src/components/Sidebar';

import Home from 'src/components/Home';


/**
 * Code
 */
const Portfolio = () => (
  <div id="portfolio" className="open">
    <div id="sidebar-toggle">||</div>
    <Sidebar />
    <main id="main">
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </main>
  </div>
);

/**
 * Export
 */
export default Portfolio;
