/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */


/**
 * Code
 */
const Sidebar = ({ routes }) => (
  <div id="sidebar">
    <div className="sidebar-item">
      <p>Hello, this site is a React / Redux app. You can get the <a href="" className="external-link">source on GitHub</a></p>
    </div>

    <nav className="sidebar-nav">
      {Object.keys(routes).map(path => (
        <NavLink
          key={path}
          to={path}
          exact
          className="sidebar-nav-link"
        >
          {routes[path].nav}
        </NavLink>
      ))}
    </nav>

    <div className="sidebar-item">
      <p>Visit my <a href="" className="external-link">Twitter</a></p>
      <p>Visit my <a href="" className="external-link">Linkedin</a></p>
      <p>Visit my <a href="" className="external-link">GitHub</a></p>
    </div>
  </div>
);
Sidebar.propTypes = {
  routes: PropTypes.object.isRequired,
};

/**
* Export
*/
export default Sidebar;
