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
      var gridClassName = this.props.gridClassName || 'col-md-2';
      var selectedVideoStyle = this.props.selectedVideoStyle;
      var otherStyles = this.props.otherStyles || 'top50 left25 right25';
      return(
          <div className = {gridClassName + " " + selectedVideoStyle + " " + otherStyles + " video-card-styles height-small"}>
              <VideoTitle title = {this.props.videoData.name} id = {this.props.videoData._id}/>
              <VideoPlayer url = {this.props.videoData.url}/>
              <VideoRating ratings = {avg(this.props.videoData.ratings)}/>
              <VideoDescription description = {this.props.videoData.description}/>
          </div>
    );
  }
});

module.exports=VideoCard;
