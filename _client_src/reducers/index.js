/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:15:58+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-22 23:43
 */



import {
  routerStateReducer as router
} from 'redux-router';
import {
  combineReducers
} from 'redux';

import * as commonActions from '../actions/common';
import * as messageActions from '../actions/common_message';

import dialog from './dialog';
import message from './message';

function loading(state = {
  show: false,
  msg: ''
}, action) {
  switch (action.type) {
    case commonActions.SHOW_LOADING:
      return {
        show: true,
        msg: action.msg
      };

    case commonActions.HIDE_LOADING:
    case messageActions.SHOW_SUCCESS_MSG:
    case messageActions.SHOW_ERROR_MSG:
    case messageActions.SHOW_TOAST:
      return {
        show: false,
        msg: ''
      };

    default:
      return state;
  }
}

function sidebarOpenKeys(state = [], action) {
  switch (action.type) {
    case commonActions.SET_SIDEBAR_OPEN_KEYS:
      return Object.assign([], action.data);
    default:
      return state;
  }
}

function sidebarSelectedKey(state = '', action) {
  switch (action.type) {
    case commonActions.SET_SIDEBAR_SELECTED_KEY:
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loading,
  dialog,
  message,
  sidebarOpenKeys,
  sidebarSelectedKey,
  router
});

export default rootReducer;
