"use strict";

var React = require('react');
var Router = require('react-router');
var AuthenticationAction = require('../../actions/authAction');
var AuthStore = require('../../stores/authStore');
var toastr = require('toastr');

var LoginPage = React.createClass({

  mixins:[
		Router.Navigation
	],

  getInitialState(){
    return {
      user:{username:"",password:""},
      dirty:false
    }
  },

  setUserCreds(event){
    this.setState({dirty:true});
    var fieldName = event.target.name;
    var fieldValue = event.target.value;
    this.state.user[fieldName] = fieldValue;
    return this.setState({user:this.state.user});
  },

  authenticate(){
    AuthenticationAction.authenticate(this.state.user);
    debugger;
    var sessionId = AuthStore.getSessionId();
    if(sessionId != undefined && sessionId != ''){
        this.transitionTo('videos',{sessionId:sessionId});
    }else{
      debugger;
      toastr.error("Authentication failed");
    }

  },
  render(){
    return(
      <div>
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">Username</span>
          <input type="text" className="form-control" name="username"
            value={this.state.user.username} placeholder="Username" aria-describedby="sizing-addon1"
            onChange={this.setUserCreds}>
          </input>
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">password</span>
          <input type="password" className="form-control" name="password"
            value={this.state.user.password} placeholder="Password" aria-describedby="sizing-addon1"
            onChange={this.setUserCreds}></input>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.authenticate}>Login</button>
      </div>
    );
  }
});

module.exports = LoginPage;
