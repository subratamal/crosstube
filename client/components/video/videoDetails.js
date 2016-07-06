"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var VideoActions = require('../../actions/videoActions');

var VideoDetails = React.createClass({
    render(){
        var id = this.props.params.id;

        VideoActions.getVideoById(id);

        return (
            <div className="col-md-9 video-card-styles">
                BIG VIDEO CARD
            </div>
        )
    }
});

module.exports = VideoDetails;
