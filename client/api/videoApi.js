"use strict";

var videos = require('./videoData').videos;
var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');

// return cloned copy so that the item is passed by value instead of by reference
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var videoApi = {
	getAllVideos: function() {
		 $.ajax({
		 	url: RestConfig.VIDEOS_FETCH_URL,
		 	dataType: 'json',
		 	cache: false,
		 	success: function(data){
		 		Dispatcher.dispatch({
		 				type: ActionTypes.VIDEOS_LOADED,
		 				payload:{
		 					videos: data.data,
		 					dataFetchState: "ready",
		 				}
		 		});
		 	},
		 	error:function(xhr,status,err){
		 		Dispatcher.dispatch({
		 				type: ActionTypes.VIDEOS_LOAD_FAILED,
		 				payload:{
		 					videos: null,
		 					dataFetchState: "failed",
		 				}
		 		});
		 	}
		 });
	},

	getVideoById: function(id) {
		var video = _.find(videos, {id: id});
		if(video) {
			return _clone(video);
		}

		$.ajax({
		   url: RestConfig.VIDEO_FETCH_URL + id,
		   dataType: 'json',
		   cache: false,
		   success: function(data){
			   Dispatcher.dispatch({
					   type: ActionTypes.VIDEO_DETAILS,
					   payload:{
						   video: data
					   }
			   });
		   },
		   error:function(xhr,status,err){
			   Dispatcher.dispatch({
					   type: ActionTypes.VIDEO_DETAILS_FAILED,
					   payload:{
						   video: null
					   }
			   });
		   }
		});
	}
};

module.exports = videoApi;
