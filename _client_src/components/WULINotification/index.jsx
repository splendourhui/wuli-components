/**
* @Author: SplendourHui
* @Date:   2016-05-14 11:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-14 11:32
*/



import React, {Component, PropTypes} from 'react';

import notification from 'antd/lib/notification';

class WULINotification extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.show && prevProps.notificationKey !== this.props.notificationKey) {
      const method = notification[this.props.type];
      const hold = this.props.hold || 5;
      const key = this.props.notificationKey;

      method({
        message: this.props.title,
        description: this.props.content,
        onClose: this.props.onClose,
        duration: this.props.hold,
        key
      });

      const hideNotification = () => {
        this.props.hideNotification();
        notification.close(key);
      };

      setTimeout(hideNotification, hold * 1000);
    }
  }
  render() {
    return (
      <div></div>
    );
  }
}

WULINotification.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  hold: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  notificationKey: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  hideNotification: PropTypes.func.isRequired
};

export default WULINotification;
