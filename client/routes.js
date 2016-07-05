"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
		<Route name="app" path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/auth/login')} />
			<Route name="videos" handler={require('./components/video/videoList')} />
		</Route>
	);

module.exports=routes;
