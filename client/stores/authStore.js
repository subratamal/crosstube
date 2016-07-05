"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthenticationAction = require('../actions/authAction');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _sessionId = '';

var AuthStore = assign({},EventEmitter.prototype,{

  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },

  removeChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },

  emitChange(){
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function(state){
  var actionType =  state.type,payload = state.payload;
  switch (actionType) {
    case ActionTypes.USER_AUTHENTICATED:
      console.log("user authenticated");
      AuthStore.emitChange();
      break;
    case ActionTypes.USER_NOT_AUTHENTICATED:
      console.log("invalid user");
      AuthStore.emitChange();
      break;
    default:

  }
});
