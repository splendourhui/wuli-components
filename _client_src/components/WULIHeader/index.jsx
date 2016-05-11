/**
* @Author: SplendourHui
* @Date:   2016-05-11 10:58
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-11 17:05
*/



import React, {Component, PropTypes} from 'react';
import './style.less';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';

class WULIHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getLogoHref = () =>
      this.props.logoHref || '#';

    const getLogoSrc = () =>
      this.props.logoSrc || 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg';

    const getUserPart = () =>
      this.props.user ? (
        <div className="wuli-user">
          <Icon type="user" />
          <span>{this.props.user.name}</span>
        </div>
      ) : '';

    return (
      <header className="wuli-header">
        <Row>
          <Col span={4}>
            <a className="wuli-logo" href={getLogoHref()}>
              <img src={getLogoSrc()} />
              <span>{this.props.title}</span>
            </a>
          </Col>
          <Col span={16} />
          <Col span={4}>
            {getUserPart()}
          </Col>
        </Row>
      </header>
    );
  }
}

WULIHeader.propTypes = {
  title: PropTypes.string.isRequired,
  logoHref: PropTypes.string,
  logoSrc: PropTypes.string,
  user: PropTypes.object
};

export default WULIHeader;
