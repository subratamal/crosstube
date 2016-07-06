"use strict";

var React = require("react");
var Dispatcher = require('../dispatcher/appDispatcher');
var ReactRouter = require("react-router");
var VideoApi = require('../api/VideoApi');
var ActionTypes = require('../constants/actionTypes');
// var VideoStore = require('../stores/videoStore');

var VideoActions = {
    getAllVideos() {
        VideoApi.getAllVideos();
    },

    getVideoById(id) {
        var video = null;
        if(video) {
            Dispatcher.dispatch({
                type: ActionTypes.VIDEO_DETAILS,
                paload: {
                    video: video
                }
            })
        } else {
            VideoApi.getVideoById(id);
        }
    },

    searchVideos(size) {
      VideoApi.getAllVideos(size);
    }
}

module.exports = VideoActions;
