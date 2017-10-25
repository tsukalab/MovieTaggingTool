import React from'react';

import TagElement from'../components/TagElement';

class TagList extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.props = {};
    this._onChange = this._onChange.bind(this);
  }

  _onChange(){
  }

  render(){
    var list = [];
    for(var i in state.tags){
      list.push(<TagElement 
                   tag={state.tags[i]} />
      )
    }
   
    return (
      <div id="wrapper">
        <div id="container">
          <ul id="list">
            {list}
          </ul>            
        </div>
     </div>
      
    );
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  componentWillUpdate(){
  }


  componentDidUpdate(){
  }

  componentWillReceiveProps(){
  }

  componentWillUnmount(){
  }

}

export default TagList;
