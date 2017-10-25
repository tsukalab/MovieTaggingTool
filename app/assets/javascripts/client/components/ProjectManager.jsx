import React from'react';

import Navigation from'./Navigation';
import Frame from'./Frame';

import{ Router, Route, DefaultRoute }from'react-router';

class ProjectManager extends React.Component{


  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="body">
         <Navigation />
      </div>
    ); 
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
