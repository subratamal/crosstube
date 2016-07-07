'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('./common/header');
var VideoSearchActions = require("../actions/videoActions");
var VideoStore = require('../stores/videoStore');
var VideoList = require('./video/videoList');
var Link = Router.Link;

var Home = React.createClass({

	render(){
		return(
				<div></div>
			);
	}
});

module.exports=Home;
