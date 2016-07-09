"use strict";

var videos = require('./videoData').videos;
var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');
import http from 'superagent';

// return cloned copy so that the item is passed by value instead of by reference
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var videoApi = {
	getAllVideos: function() {
		 http
		 .get(RestConfig.VIDEOS_FETCH_URL)
		 .then(
		 	function(res){
		 		Dispatcher.dispatch({
		 				type: ActionTypes.VIDEOS_LOADED,
		 				payload:{
		 					videos: res.body.data,
		 					dataFetchState: "ready",
		 				}
		 		});
		 	},
		 	function(xhr,status,err){
		 		Dispatcher.dispatch({
		 				type: ActionTypes.VIDEOS_LOAD_FAILED,
		 				payload:{
		 					videos: null,
		 					dataFetchState: "failed",
		 				}
		 		});
		 	}
		 );
	},

	getVideoById: function(id) {
		var video = _.find(videos, {id: id});
		if(video) {
			return _clone(video);
		}

		http
		.get(RestConfig.VIDEO_FETCH_URL + id)
		.then(
		   function(res){
			   Dispatcher.dispatch({
					   type: ActionTypes.VIDEO_DETAILS,
					   payload:{
						   video: res.body
					   }
			   });
		   },
		   function(xhr,status,err){
			   Dispatcher.dispatch({
					   type: ActionTypes.VIDEO_DETAILS_FAILED,
					   payload:{
						   video: null
					   }
			   });
		   }
		);
	}
};

module.exports = videoApi;
