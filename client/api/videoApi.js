"use strict";

var videos = require('./videoData').videos;
var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(article) {
	return article.title.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var VideoApi = {
	getAllVideos: function(sessionId) {
		var fetchUrl = RestConfig.VIDEOS_FETCH_URL+"&sessionId="+sessionId;
		 $.ajax({
		 	url: fetchUrl,
		 	dataType: 'json',
		 	cache: false,
		 	success: function(data){
		 		Dispatcher.dispatch({
		 				type: ActionTypes.VIDEOS_LOADED,
		 				payload:{
		 					videos: data,
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
						   videos: data
					   }
			   });
		   },
		   error:function(xhr,status,err){
			   Dispatcher.dispatch({
					   type: ActionTypes.VIDEO_DETAILS_FAILED,
					   payload:{
						   videos: null
					   }
			   });
		   }
		});
	}
};
module.exports = VideoApi;
