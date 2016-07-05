"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var VideoStore = require('./stores/videoStore');

Router.run( routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('adminApp'));
});
