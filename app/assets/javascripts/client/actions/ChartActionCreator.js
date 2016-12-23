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
}

module.exports = ChartActionCreator;
