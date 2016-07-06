"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Rating = require('react-rating');

var VideoRating = React.createClass({
  render(){
    return(
      <Rating className="dsp-ib top10 left25" initialRate={this.props.ratings}/>
    );
  }
});

module.exports=VideoRating;
