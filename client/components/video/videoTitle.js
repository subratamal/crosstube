"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var VideoTitle = React.createClass({
  render(){
    return(
      <div className="text-center top10">
        <Link to={'/video/' + this.props.id}>
            {this.props.title}
        </Link>
      </div>
    );
  }
});

module.exports=VideoTitle;
