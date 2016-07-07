"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var videoStore = require('../../stores/videoStore');

var VideoList = React.createClass({

  getInitialState(){
    videoStore.getAllVideosInitialLoad();
    return null;
  },

  componentDidMount(){
    videoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    videoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(videoStore.getAllVideos());
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
