/**
* @Author: SplendourHui
* @Date:   2016-05-12 14:30
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-12 15:10
*/



import React, {Component, PropTypes} from 'react';
import './style.less';

import Modal from 'antd/lib/modal';

class WULIConfirmDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal className="wuli-confirm-dialog"
        visible={this.props.show}
        title={this.props.title}
        onOk={this.props.handleOK}
        confirmLoading={this.props.confirmLoading}
        onCancel={this.props.handleCancel}
        >
        <p>{this.props.content}</p>
      </Modal>
    );
  }
}

WULIConfirmDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleOK: PropTypes.func,
  handleCancel: PropTypes.func,
  confirmLoading: PropTypes.bool,
  content: PropTypes.string
};

export default WULIConfirmDialog;
