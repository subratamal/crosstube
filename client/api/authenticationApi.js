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
          type: ActionTypes.USER_AUTHENTICATION_RESPONSE,
          payload : {
            sessionData: data
          }
        });
      },
      error:function(data){
        Dispatcher.dispatch({
          type: ActionTypes.USER_NOT_AUTHENTICATED,
          payload : {
            sessionData:null
          }
        });
      }
    });
  }
}

module.exports = AuthenticationApi;
