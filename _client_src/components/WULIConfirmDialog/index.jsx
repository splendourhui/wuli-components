/**
* @Author: SplendourHui
* @Date:   2016-05-13 09:39
* @Last modified by:   SplendourHui
* @Last modified time: 2016-10-14 19:06
*/

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import './style.less';

import {Modal} from 'antd';

const WULIConfirmDialog = ({className, show, title, content, confirmLoading,
  handleOK, handleCancel}) => {
  const cls = classNames({
    'wuli-confirm-dialog': true
  }, className);

  return (
    <Modal className={cls}
      visible={show}
      title={title}
      onOk={handleOK}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      >
      <p>{content}</p>
    </Modal>
  );
};

WULIConfirmDialog.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  confirmLoading: PropTypes.bool,
  handleOK: PropTypes.func,
  handleCancel: PropTypes.func
};

export default WULIConfirmDialog;
