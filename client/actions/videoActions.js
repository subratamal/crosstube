"use strict";

var React = require("react");
var Dispatcher = require('../dispatcher/appDispatcher');
var ReactRouter = require("react-router");
var videoApi = require('../api/videoApi');
var ActionTypes = require('../constants/actionTypes');

var VideoActions = {
    getAllVideos() {
        videoApi.getAllVideos();
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
            videoApi.getVideoById(id);
        }
    },

    searchVideos(size) {
      videoApi.getAllVideos(size);
    }
}

module.exports = VideoActions;
