/**
* @Author: SplendourHui
* @Date:   2016-05-13 10:46
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-14 11:36
*/



import React, {Component, PropTypes} from 'react';
import './style.less';

import message from 'antd/lib/message';

class WULIToast extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show && prevProps.toastKey !== this.props.toastKey) {
      const method = message[this.props.type];
      const hold = this.props.hold || 3;
      this.hide = method(this.props.content || 'toast', this.props.hold || 3);
      setTimeout(this.props.hideToast, hold * 1000);
    } else {
      if (this.hide) {
        this.hide();
      }
    }
  }
  render() {
    return (
      <div></div>
    );
  }
}

WULIToast.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  hideToast: PropTypes.func.isRequired,
  toastKey: PropTypes.any.isRequired,
  hold: PropTypes.number,
  content: PropTypes.string
};

export default WULIToast;
