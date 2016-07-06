'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render(){
		return(
			<div class="page-header">
				<h1>Crossover Video Portal</h1>
			</div>
			);
	}
});


module.exports = Header;
