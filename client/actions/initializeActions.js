"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp(){
		console.log("Initialization");
	}
};

module.exports = InitializeActions;
