"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var VideosApi = require('../api/videoApi');

var InitializeActions = {
	initApp(){
		VideosApi.getAllVideos();
	}
};

module.exports = InitializeActions;
