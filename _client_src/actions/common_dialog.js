/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:29:35+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T11:30:08+08:00
 */



export const SHOW_CONFIRM_DIALOG = 'SHOW_CONFIRM_DIALOG';
export const CLOSE_CONFIRM_DIALOG = 'CLOSE_CONFIRM_DIALOG';

exports.showConfirmDialog = (msg = '确认要执行该操作吗？', confirmType, id) => ({
  type: SHOW_CONFIRM_DIALOG,
  msg,
  confirmType,
  id
});

exports.closeConfirmDialog = () => ({
  type: CLOSE_CONFIRM_DIALOG
});
