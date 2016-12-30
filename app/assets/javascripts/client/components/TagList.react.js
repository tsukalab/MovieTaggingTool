import React from'react';

import tagList from'../templates/TagList.jade';

import TagElement from'../components/TagElement.react';

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
    return tagList(Object.assign(
      this,
      this.state,
      this.props,
      {TagElement: React.createFactory(TagElement)}
    ));
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
