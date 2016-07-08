"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var AuthHandler = require('./components/auth/authHandler');
var Videos = require('./components/videos/videos');
var VideoPlayer = require('./components/videos/videoPlayer');
var Home = require('./components/common/home');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={AuthHandler}>
			<IndexRoute component={Home}/>
			<Route path="/videos" component={Videos}/>
			<Route path="/videoPlayer/:videoId" component={VideoPlayer}/>
		</Route>
	</Router>
);

module.exports=routes;
