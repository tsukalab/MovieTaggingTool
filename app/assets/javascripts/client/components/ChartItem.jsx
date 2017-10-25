const
    ChartActionCreator = require('../actions/ChartActionCreator'),
    ChartView = require('../chart/ChartView'),
    TagList = require('../chart/TagList'),
    React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Route = Router.Route;

const ChartItem = React.createClass({

  chartItemsChange(e){
    if(e.target.checked){
      ChartView.addItem(e.target.id);
    }else {
      ChartView.removeItem(e.target.id);
    }
},

  createTag(){
   if(ChartView.getSelection() != null){
      TagList.appendTag(ChartView.getSelection(),this.refs.tagNameTxt.value)
  }

},

  render (){
   return(
     <div>
       <label>
         <input id="ax" type="checkbox" onChange={this.chartItemsChange}/><font color="#f28c36">加速度X</font>
       </label>
       <label>
         <input id="ay" type="checkbox" onChange={this.chartItemsChange}/><font color="#e54520">加速度Y</font>
       </label>
       <label>
         <input id="az" type="checkbox" onChange={this.chartItemsChange}/><font color="#629ac9">加速度Z</font>
       </label>
       <label>
         <input id="gx" type="checkbox" onChange={this.chartItemsChange}/><font color="&quot;#cfe43f">角速度X</font>
       </label>
       <label>
         <input id="gy" type="checkbox" onChange={this.chartItemsChange}/><font color="#CCCC00">角速度Y</font>
       </label>
       <label>
         <input id="gz" type="checkbox" onChange={this.chartItemsChange}/><font color="#8e37ca">角速度Z</font>
       </label>
       <tag_form>タグ名:
         <input type="text" name="tag_name_txt" ref="tagNameTxt"/>
       </tag_form>
       <label>
         <button onClick={this.createTag}>
           作成
         </button>
       </label>
     </div>
   )
  },

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
