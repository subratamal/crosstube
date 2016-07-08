"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var videoStore = require('../../stores/videoStore');
var videoActions = require('../../actions/videoActions');
var VideoCardBig = require('./videoCardBig');
var VideoDetailsList = require('./videoDetailsList');

var VideoDetails = React.createClass({
    getInitialState() {
        videoActions.getVideoById(this.props.params.id);
        return null;
    },

    componentWillMount() {
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

    render(){
        if(!this.state) {
            return (
                <div className=""> Loading .... </div>
            )
        }

        // TODO: deduce the videoCard from the array.
        var videoCard = _.find(this.state.videos, function(video){
            return video.currentlyPlaying;
        });

        // TODO: 'currentlyPlaying' should be handled for the list in this case.
        return (
            <div className="col-md-12">
                <VideoCardBig videoCard={videoCard} />
                <VideoDetailsList videos={this.state.videos} />
            </div>
        )
    }
});

module.exports = VideoDetails;
