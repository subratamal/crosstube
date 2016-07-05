"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoTitle = require('./VideoTitle');
var VideoRating = require('./videoRating');
var VideoPlayer = require('./videoPlayer');
var VideoDescription = require('./videoDesc');

var VideoCard = React.createClass({
  render(){
    return(
      <div>
        <VideoTitle title = {this.props.videoData.name}/>
        <VideoPlayer url = {this.props.videoData.url}/>
        <VideoRating rating = {this.props.videoData.ratings}/>
        <VideoDescription description = {this.props.videoData.description}/>
      </div>
    );
  }
});

module.exports=VideoCard;
