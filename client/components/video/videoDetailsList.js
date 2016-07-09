"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var videoStore = require('../../stores/videoStore');

var VideoList = React.createClass({

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
    function createVideoCard(videoData, idx){
      return(
        <VideoCard key={videoData.id} videoData={videoData}
            gridClassName={'col-md-12'}
            selectedVideoStyle={videoData.currentlyPlaying ? 'selected-video' : ''}
            otherStyles={idx==0 ? 'top0' : 'top10'}/>
      );
    }

    return(
      <div className="video-list col-md-3 video-details-list">
        {this.props.videos ? this.props.videos.map(createVideoCard, this) : ""}
      </div>
    );
  }
});

module.exports= VideoList;
