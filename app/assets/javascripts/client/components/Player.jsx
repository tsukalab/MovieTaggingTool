import React from'react';

import{ Route, RouteHandler, Link, DefaultRoute }from'react-router';

import ChartItem from'./ChartItem'

import ChartView from'../chart/ChartView';
import TagList from'../chart/TagList';
import PlayerStore from '../stores/PlayerStore';

class Player extends React.Component{

  render(){
    return (
     <div>
         <video width="800" height="480" ref="video" controls="controls">
           <source src="https://crest-multimedia-web.s3.amazonaws.com/uploads/attachment/movie/file/2135/2017-01-25_20_22_02.mp4"/>
         </video>
         <svg id="tagList" ref="tagList"></svg>
         <svg id="chart" ref="chart"></svg>
       <ChartItem />
     </div>
    );
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

    this.refs.video.addEventListener("timeupdate",function(v){
    ChartView.changeCurrentTime(v.target.currentTime,v.target.duration);    

},false);

    ChartView.init(this.refs.chart);
    TagList.init(this.refs.tagList);
    PlayerStore.addChangeListener(this._onChange);
}

}

export default Player;
