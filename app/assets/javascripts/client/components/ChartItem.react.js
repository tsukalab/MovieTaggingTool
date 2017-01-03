const
    ChartActionCreator = require('../actions/ChartActionCreator'),
    ChartView = require('../chart/ChartView'),
    React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Route = Router.Route;

import chartItem from '../templates/ChartItem.jade';


const ChartItem = React.createClass({

  chartItemsChange(e){
    if(e.target.checked){
      ChartView.addItem(e.target.id);
    }else {
      ChartView.removeItem(e.target.id);
    }
},

  render : chartItem,

  componentWillMount : function(){
    return {
    };
  },

  componentDidMount : function (){
    //State.reload();
  },

  componentWillUpdate : function(){
    return {
    };
  },

  componentDidUpdate : function(){
  },

  componentWillUnmount : function(){
    return {
    };
  },

});

module.exports = ChartItem;
