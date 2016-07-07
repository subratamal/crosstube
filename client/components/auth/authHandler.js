"use strict";

var React = require('react');
var Router = require('react-router');

var AuthHandler = React.createClass({
  render(){
    return(
      <Router.RouteHandler/>
    );
  }
});

module.exports = AuthHandler;
