"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoTitle = require('./VideoTitle');
var VideoRating = require('./videoRating');
var VideoPlayer = require('./videoPlayer');
var VideoDescription = require('./videoDesc');
var avg = require('../../utils/helpers');

var VideoCard = React.createClass({
  render(){
    return(
      <div className="col-md-2 video-card-styles height-small top50 left25 right25">
        <VideoTitle title = {this.props.videoData.name} id = {this.props.videoData._id}/>
        <VideoPlayer url = {this.props.videoData.url}/>
        <VideoRating ratings = {avg(this.props.videoData.ratings)}/>
        <VideoDescription description = {this.props.videoData.description}/>
      </div>
    );
  }
});

module.exports=VideoCard;
