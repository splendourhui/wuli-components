/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:18:35+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-12 15:16
 */



import {
  combineReducers
} from 'redux';

import * as dialogActions from '../actions/common_dialog';

function confirmDialog(state = {
  show: false,
  msg: '确认要执行该操作吗？',
  confirmAction: void(0)
}, action) {
  switch (action.type) {
    case dialogActions.SHOW_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: true,
        msg: action.msg,
        confirmAction: action.confirmAction
      });
    case dialogActions.CLOSE_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: false
      });
    default:
      return state;
  }
}

function confirmLoading(state = false, action) {
  switch (action.type) {
    case dialogActions.SHOW_CONFIRM_LOADING:
      return true;
    case dialogActions.CLOSE_CONFIRM_DIALOG:
      return false;
    default:
      return state;
  }
}

const dialogReducer = combineReducers({
  confirmDialog,
  confirmLoading
});

export default dialogReducer;
