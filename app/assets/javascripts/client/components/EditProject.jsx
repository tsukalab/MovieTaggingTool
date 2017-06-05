import React from 'react';

import{ Router, Route, DefaultRoute }from'react-router';
import Player from'./Player';
import TagList from'./TagList';

import TagStore from'../stores/TagStore';

class EditProject extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.props = {};
  }


  render() {
    return (
      <div className="editproject">
        <Player />
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


module.exports = EditProject;
