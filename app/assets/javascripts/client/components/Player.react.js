import React from'react';

import{ Route, RouteHandler, Link, DefaultRoute }from'react-router';

import player from'../templates/Player.jade';
import ChartView from'../chart/ChartView';
import PlayerStore from '../stores/PlayerStore';

class Player extends React.Component{

  render(){
    return player(Object.assign(
      this,
      this.state
    ));
  }

  constructor(props){
    super(props);
    this.state = {};
    this.props = {};
    this._onChange = this._onChange.bind(this);
}

  setCurrentTime(){
  if(React.findDOMNode(this.refs.video).currentTime != PlayerStore.getCurrentTime()){
     React.findDOMNode(this.refs.video).currentTime = PlayerStore.getCurrentTime();
  }
 }

  _onChange(){
   this.setCurrentTime();  
}

  componentDidMount(){

    React.findDOMNode(this.refs.video).addEventListener("timeupdate",function(v){
    ChartView.changeCurrentTime(v.target.currentTime);    
},false);

    ChartView.drawChart( React.findDOMNode(this.refs.chart));
    PlayerStore.addChangeListener(this._onChange);
}

}

export default Player;
