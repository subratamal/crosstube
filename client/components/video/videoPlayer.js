"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var video = require('video.js');

var VideoPlayer = React.createClass({
  render(){
    return(
      <div>
      <video id="really-cool-video" class="video-js vjs-default-skin" controls
            preload="auto" width="640" height="264">
            <source src={'http://localhost:3000/' + this.props.url} type="video/mp4" />
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser
                that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
        </video>
      </div>
    );
  }
});

module.exports = VideoPlayer;