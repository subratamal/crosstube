/*eslint-disable strict*/ // Need global variable, disabling check

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './common/header';

var App = React.createClass({
	render(){
		return(
				<div>
					<Header/>
					<div className="fluid-container">
						<RouteHandler/>
					</div>
				</div>
			);
	}
});

module.exports = App;
