"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;
var browserHistory = Router.browserHistory;

var routes = (
		<Route name="app" path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/homePage')} />
			<Route name="videoDetails" path="/video/:id"
					handler={require('./components/video/videoDetails')}>
			</Route>
		</Route>
);

module.exports=routes;
