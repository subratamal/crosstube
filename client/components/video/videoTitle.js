"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var VideoTitle = React.createClass({
  render(){
    return(
      <div>
        {this.props.title}
      </div>
    );
  }
});

module.exports=VideoTitle;
