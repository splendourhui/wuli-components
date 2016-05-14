/**
* @Author: SplendourHui
* @Date:   2016-05-13 10:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-13 10:56
*/



import React, {Component, PropTypes} from 'react';
import './style.less';

import message from 'antd/lib/message';

class WULIGlobalLoading extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show) {
      this.hide = message.loading(this.props.content || '正在执行...', 0);
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

WULIGlobalLoading.propTypes = {
  show: PropTypes.bool.isRequired,
  content: PropTypes.string
};

export default WULIGlobalLoading;
