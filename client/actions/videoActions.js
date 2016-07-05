"use strict";

var React = require("react");
var Dispatcher = require('../dispatcher/appDispatcher');
var ReactRouter = require("react-router");
var VideoApi = require('../api/VideoApi');

var VideoActions = {
    getAllVideos(sessionId) {
        VideoApi.getAllVideos(sessionId);
    },

    searchVideos(size) {
      console.log("Search request received to limit the search result to size "+size);
      var searchResult = VideoApi.getAllVideos(size);
    }
}

module.exports = VideoActions;
