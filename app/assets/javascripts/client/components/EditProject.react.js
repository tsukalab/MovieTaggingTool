import React from 'react';

import editProject from '../templates/EditProject.jade';
import{ Router, Route, DefaultRoute }from'react-router';
import Frame from'./Frame.react.js';
import Player from'./Player.react.js';

class EditProject extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.props = {};
  }


  render() {
    return editProject(Object.assign(
      this,
      this.state,
      this.props,
      {Player: React.createFactory(Player)}      
    ));
  }

  componentDidMount(){
  }

  componentWillUpdate(){
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
  }
}


module.exports = EditProject;
