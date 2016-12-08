//WebAPIUtilsが使用。 サインインとサインアウトが行われるとaction
const
    ActionTypes = require('../constants/ActionTypes'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

const ServerActionCreator = {
  signIn: function( uid ){
    AppDispatcher.dispatch({
      type : ActionTypes.SIGN_IN_SUCCESS,
      uid : uid
    });
  },

  signOut: function( act ){
    AppDispatcher.dispatch({
      type : ActionTypes.SIGN_OUT_SUCCESS
    });
  },
}

module.exports = ServerActionCreator;
