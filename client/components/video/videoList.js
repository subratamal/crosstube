"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var VideoStore = require('../../stores/videoStore');

var VideoList = React.createClass({

  getInitialState(){
    VideoStore.getAllVideosInitialLoad();
    return null;
  },

  componentDidMount(){
    VideoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    VideoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(VideoStore.getAllVideos());
  },

  render() {
    function createVideoCard(videoData){
      return(
        <VideoCard key={videoData.id} videoData={videoData}/>
      );
    }

    return(
      <div className="video-list">
        {this.state ? this.state.data.map(createVideoCard, this) : ""}
      </div>
    );
  }
});

module.exports= VideoList;
