/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:15:58+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T17:35:05+08:00
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

function loading(state = false, action) {
  switch (action.type) {
    case commonActions.SHOW_LOADING:
      return true;

    case commonActions.HIDE_LOADING:
    case messageActions.SHOW_SUCCESS_MSG:
    case messageActions.SHOW_ERROR_MSG:
      return false;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loading,
  dialog,
  message,
  router
});

export default rootReducer;
