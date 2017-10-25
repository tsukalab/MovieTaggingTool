const
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventTypes = require('../constants/EventTypes'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events');

let _currentTime = 0;

const PlayerStore = Object.assign({}, EventEmitter.prototype, {
   init : function(){
   },
 
   getCurrentTime : function(){
     return _currentTime
  },
  
   changeCurrentTime : function(beginTime,selectTime){
   _currentTime = (selectTime.getHours()*360 + selectTime.getMinutes()*60 + selectTime.getSeconds()) - (beginTime.getHours()*360 + beginTime.getMinutes()*60 + beginTime.getSeconds());
  
   this.emitChange();
},

 emitChange : function(){
    this.emit(EventTypes.CURRENT_TIME_CHANGE);
  },

 addChangeListener: function(callback){
    this.on(EventTypes.CURRENT_TIME_CHANGE, callback);
  },

});

PlayerStore.dispatchToken = AppDispatcher.register(function( action ){
  switch( action.type ){
    case ActionTypes.SELECT_PLAY_TIME :
      PlayerStore.changeCurrentTime(action.beginTime,action.selectTime);
      break;

    default :
      break;
};
});

PlayerStore.init();
module.exports = PlayerStore;
