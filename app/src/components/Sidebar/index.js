/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
const Sidebar = () => (
  <div id="sidebar">
    <div className="sidebar-item">
      <p>Hello, this site is a React / Redux app. You can get the <a href="" className="external-link">source on GitHub</a></p>
    </div>

    <nav className="sidebar-nav">
      <a href="" className="sidebar-nav-link">Home</a>
      <a href="" className="sidebar-nav-link">Work</a>
      <a href="" className="sidebar-nav-link">About</a>
      <a href="" className="sidebar-nav-link">Contact</a>
    </nav>

    <div className="sidebar-item">
      <p>Visit my <a href="" className="external-link">Twitter</a></p>
      <p>Visit my <a href="" className="external-link">Linkedin</a></p>
      <p>Visit my <a href="" className="external-link">GitHub</a></p>
    </div>
  </div>
);

/**
* Export
*/
export default Sidebar;
