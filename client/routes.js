"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;
var browserHistory = Router.browserHistory;

var routes = (
		<Route name="AuthHandler" handler={require('./components/auth/authHandler')}>
			<DefaultRoute name="videos" path="/videos" handler={require('./components/video/videoList')}/>
			<Route name="Login" path="./components/auth/login"/>
		</Route>
);

module.exports=routes;
