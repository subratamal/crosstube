"use strict";

var React = require('react');
var Router = require('react-router');
var AuthenticationApi = require('../api/authenticationApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var AuthenticationAction = {
  authenticate(userCreds){
    var isAuthenticated = AuthenticationApi.authenticate(userCreds);
    }
}

module.exports = AuthenticationAction;
