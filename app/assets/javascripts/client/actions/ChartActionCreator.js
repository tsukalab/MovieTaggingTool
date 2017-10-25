const
    ActionTypes = require('../constants/ActionTypes'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

const ChartActionCreator = {

 selectPlayTime : function ( beginTime, selectTime ){
  AppDispatcher.dispatch({
      type  : ActionTypes.SELECT_PLAY_TIME,
      beginTime  : beginTime,
      selectTime : selectTime,
});
},

  createTag : function (data){
    AppDispatcher.dispatch({
      type : ActionTypes.CREATE_TAG,
      data : data,
});
},
}

module.exports = ChartActionCreator;
