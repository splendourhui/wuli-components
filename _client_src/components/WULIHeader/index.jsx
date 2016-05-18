/**
* @Author: SplendourHui
* @Date:   2016-05-11 10:58
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-18 14:43
*/

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import './style.less';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';

import map from 'ramda/src/map';

class WULIHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getLogoHref = () =>
      this.props.logoHref || '#';

    const getLogoSrc = () =>
      this.props.logoSrc || 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg';

    const getMenuItem = (item) =>
      <Menu.Item key={item.key}>{item.title}</Menu.Item>;

    const getMenu = () => (
      <Menu onClick={this.props.user.onClick}>
        {map(getMenuItem, this.props.user.actions)}
      </Menu>
    );

    const getUserNamePart = () =>
      this.props.user.actions ? (
        <Dropdown overlay={getMenu()}>
          <a href="#">
            {this.props.user.name} <Icon type="down" />
          </a>
        </Dropdown>
      ) : this.props.user.name;

    const getUserPart = () =>
      this.props.user ? (
        <div className="wuli-user">
          <Icon type="user" />
          <span>
            {getUserNamePart()}
          </span>
        </div>
      ) : '';

    return (
      <header className="wuli-header">
        <Row>
          <Col span={4}>
            <Link className="wuli-logo" to={getLogoHref()}>
              <img src={getLogoSrc()} />
              <span>{this.props.title}</span>
            </Link>
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
