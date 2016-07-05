"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var VideoTitle = React.createClass({
  render(){
    return(
      <div className="text-center top10">
        {this.props.title}
      </div>
    );
  }
});

module.exports=VideoTitle;
