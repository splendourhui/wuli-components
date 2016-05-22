/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:26:54+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-22 23:42
 */



import {
  pushState
} from 'redux-router';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

exports.showLoading = msg => ({
  type: SHOW_LOADING,
  msg: msg || 'loading'
});

exports.hideLoading = () => ({
  type: HIDE_LOADING
});

exports.jumpTo = (path, name) =>
  (dispatch, getState) => dispatch(pushState(null, path));

export const SET_SIDEBAR_OPEN_KEYS = 'SET_SIDEBAR_OPEN_KEYS';
exports.setSidebarOpenKeys = data => ({
  type: SET_SIDEBAR_OPEN_KEYS,
  data
});

export const SET_SIDEBAR_SELECTED_KEY = 'SET_SIDEBAR_SELECTED_KEY';
exports.setSidebarSelectedKey = data => ({
  type: SET_SIDEBAR_SELECTED_KEY,
  data
});
