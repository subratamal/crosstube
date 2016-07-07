"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var AuthHandler = require('./components/auth/authHandler');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={AuthHandler}/>
	</Router>
);

module.exports=routes;
