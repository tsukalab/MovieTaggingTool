import React from'react';

import Navigation from'./Navigation.react';
import Frame from'./Frame.react.js';

import{ Router, Route, DefaultRoute }from'react-router';
import projectManager from'../templates/ProjectManager.jade';

class ProjectManager extends React.Component{


  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return projectManager(Object.assign(
         this,
         this.state,
         this.props,
         { Navigation: React.createFactory(Navigation) }
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

export default ProjectManager;
