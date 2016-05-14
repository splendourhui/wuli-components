/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:30:25+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-14 11:34
 */



export const SHOW_SUCCESS_MSG = 'SHOW_SUCCESS_MSG';
export const SHOW_ERROR_MSG = 'SHOW_ERROR_MSG';
export const HIDE_SUCCESS_MESSAGE = 'HIDE_SUCCESS_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';

exports.showSuccessMessage = msg => ({
  type: SHOW_SUCCESS_MSG,
  sucMsg: msg
});

exports.showErrorMessage = msg => ({
  type: SHOW_ERROR_MSG,
  errMsg: msg
});

exports.hideSuccessMessage = () => ({
  type: HIDE_SUCCESS_MESSAGE
});

exports.hideErrorMessage = () => ({
  type: HIDE_ERROR_MESSAGE
});

export const SHOW_TOAST = 'SHOW_TOAST';
exports.showToast = (msgType, msg, key, hold) => ({
  type: SHOW_TOAST,
  msgType,
  msg,
  key,
  hold
});

export const HIDE_TOAST = 'HIDE_TOAST';
exports.hideToast = () => ({
  type: HIDE_TOAST
});

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
exports.showNotification = (msgType, title, content, key, hold) => ({
  type: SHOW_NOTIFICATION,
  msgType,
  title,
  content,
  key,
  hold
});

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
exports.hideNotification = () => ({
  type: HIDE_NOTIFICATION
});
