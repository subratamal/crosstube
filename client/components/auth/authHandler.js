"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var NavLink = require('../common/navLink');

var AuthHandler = React.createClass({
  render(){
    return(
      <div>
        <h1> React Router </h1>
        <ul role="nav">
          <li><NavLink to="/videos" activeClassName="active">Videos</NavLink></li>
          <li><NavLink to="/videoPlayer/vid1" activeClassName="active">Play Video</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = AuthHandler;
