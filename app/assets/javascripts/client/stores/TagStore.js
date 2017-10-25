const
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventTypes = require('../constants/EventTypes'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events');

let _tagList = [];

const TagStore = Object.assign({}, EventEmitter.prototype, {
   init : function(){
     _tagList = [];
   },
 
   getTagList : function(){
     return _tagList;
  },
  
   createTag : function(data){
    _tagList.push(data);
   this.emitChange();
},

 emitChange : function(){
    //this.emit(EventTypes.CURRENT_TIME_CHANGE);
  },

 addChangeListener: function(callback){
    //this.on(EventTypes.CURRENT_TIME_CHANGE, callback);
  },

});

TagStore.dispatchToken = AppDispatcher.register(function( action ){
  switch( action.type ){
    case ActionTypes.CREATE_TAG :
      TagStore.createTag(action.data);
      console.log(action.data);
      break;

    default :
      break;
};
});

TagStore.init();
module.exports = TagStore;
