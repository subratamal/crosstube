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
		<Route path="/videos" component={Videos}/>
		<Route path="/videoPlayer" component={VideoPlayer}/>
	</Router>
);

module.exports=routes;
