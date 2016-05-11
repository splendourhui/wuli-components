/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:18:35+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T17:35:26+08:00
 */



import {
  combineReducers
} from 'redux';

import * as dialogActions from '../actions/common_dialog';

function confirmDialog(state = {
  show: false,
  msg: '确认要执行该操作吗？',
  confirmType: 'none'
}, action) {
  switch (action.type) {
    case dialogActions.SHOW_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: true,
        msg: action.msg,
        confirmType: action.confirmType,
        id: action.id
      });
    case dialogActions.CLOSE_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: false
      });
    default:
      return state;
  }
}

const dialogReducer = combineReducers({
  confirmDialog
});

export default dialogReducer;
