"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var VideoDescription = React.createClass({
  render(){
    return(
      <div className="ellipsis top10 left25 right25">
            {this.props.description}
      </div>
    );
  }
});

module.exports = VideoDescription;
