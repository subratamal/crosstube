"use Strict";

var React = require('react');

var VideoPlayer = React.createClass({
  render(){
    return(
      <div>Play Video : {this.props.params.videoId}</div>
    );
  }
});

module.exports = VideoPlayer;
