/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:19:40+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-13 10:54
 */



import {
  combineReducers
} from 'redux';

import * as messageActions from '../actions/common_message';

function errorMessage(state = '', action) {
  const {
    type,
    errMsg
  } = action;

  if (errMsg) {
    return action.errMsg;
  }

  return state;
}

function successMessage(state = '', action) {
  const {
    type,
    sucMsg
  } = action;

  if (sucMsg) {
    return action.sucMsg;
  }

  return state;
}

function showSucMsg(state = false, action) {
  if (action.type === messageActions.SHOW_SUCCESS_MSG) {
    return true;
  } else if (action.type === messageActions.HIDE_SUCCESS_MESSAGE) {
    return false;
  } else {
    return state;
  }
}

function showErrMsg(state = false, action) {
  if (action.type === messageActions.SHOW_ERROR_MSG) {
    return true;
  } else if (action.type === messageActions.HIDE_ERROR_MESSAGE) {
    return false;
  } else {
    return state;
  }
}

function toast(state = {
  show: false,
  msgType: 'info',
  msg: '',
  hold: 1
}, action) {
  if (action.type === messageActions.SHOW_TOAST) {
    return {
      show: true,
      msgType: action.msgType,
      msg: action.msg,
      hold: action.hold
    };
  } else if (action.type === messageActions.HIDE_TOAST) {
    return {
      show: false,
      msgType: 'info',
      msg: '',
      hold: 1
    };
  } else {
    return state;
  }
}

const messagesReducer = combineReducers({
  errorMessage,
  successMessage,
  showSucMsg,
  showErrMsg,
  toast
});

export default messagesReducer;
