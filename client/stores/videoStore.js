'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var VideoActions = require('../actions/videoActions');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _videos = [];

var videoStore = assign({}, EventEmitter.prototype, {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	getAllVideos() {
		return _videos;
	},

	getAllVideosInitialLoad() {
		return VideoActions.getAllVideos();
	},

	getVideoById(id){
		return _.find(_videos, {id: id});
	},

  	getAllVideosExceptById(id){
    	return _.find(_videos, {id: id});
  	}
});

Dispatcher.register(function(state) {
	var actionType = state.type, payload = state.payload;

	switch(actionType){
		case ActionTypes.INITIALIZE:
			_videos = payload.videos;
			break;
		case ActionTypes.VIDEOS_LOADED:
			_videos = payload.videos;
			break;
		case ActionTypes.VIDEOS_LOAD_FAILED:
			break;
		case ActionTypes.VIDEO_DETAILS:
			_.map(_videos, function(video){
				if(payload.video.data._id === video._id) {
					video.currentlyPlaying = true;
				}
			});
			break;
		case ActionTypes.VIDEO_DETAILS_FAILED:
			break;
		default:
			//no op
	}

	videoStore.emitChange();
});

module.exports = videoStore;
