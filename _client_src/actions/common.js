/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:26:54+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T17:50:20+08:00
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
