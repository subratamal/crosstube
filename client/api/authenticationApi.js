"use strict";

var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var AuthenticationApi = {
  authenticate(userCreds){
    $.ajax({
      url : RestConfig.AUTHENTICATION_URL,
      type: 'POST',
      data : userCreds,
      success:function(data){
        Dispatcher.dispatch({
          actionType: ActionTypes.USER_AUTHENTICATED,
          sessionData: data
        });
      },
      error:function(data){
        Dispatcher.dispatch({
          actionType: ActionTypes.USER_NOT_AUTHENTICATED,
          sessionData:null
        });
      }
    });
  }
}

module.exports = AuthenticationApi;
