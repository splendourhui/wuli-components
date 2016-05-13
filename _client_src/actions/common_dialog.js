/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:29:35+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-12 15:14
 */



export const SHOW_CONFIRM_DIALOG = 'SHOW_CONFIRM_DIALOG';
export const CLOSE_CONFIRM_DIALOG = 'CLOSE_CONFIRM_DIALOG';
export const SHOW_CONFIRM_LOADING = 'SHOW_CONFIRM_LOADING';

exports.showConfirmDialog = (msg = '确认要执行该操作吗？', confirmAction) => ({
  type: SHOW_CONFIRM_DIALOG,
  msg,
  confirmAction
});

exports.closeConfirmDialog = () => ({
  type: CLOSE_CONFIRM_DIALOG
});

exports.showConfirmLoading = () => ({
  type: SHOW_CONFIRM_LOADING
});
