"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var videoStore = require('../../stores/videoStore');
var VideoTitle = require('./VideoTitle');
var VideoRating = require('./videoRating');
var VideoPlayer = require('./videoPlayer');
var VideoDescription = require('./videoDesc');
var avg = require('../../utils/helpers');

var VideoCardBig = React.createClass({
    componentWillMount() {
    },

    componentDidMount(){
      videoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      videoStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(videoStore.getVideoById(this.props.params.id));
    },

    render(){
        return (
            <div className="col-md-9 video-card-styles">
                <VideoTitle title = {this.props.videoCard.name} id = {this.props.videoCard._id}/>
                <VideoPlayer url = {this.props.videoCard.url}/>
                <VideoRating ratings = {avg(this.props.videoCard.ratings)}/>
                <VideoDescription description = {this.props.videoCard.description}/>
            </div>
        )
    }
});

module.exports = VideoCardBig;
