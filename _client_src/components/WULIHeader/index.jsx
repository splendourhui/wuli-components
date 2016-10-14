/**
* @Author: SplendourHui
* @Date:   2016-05-11 10:58
* @Last modified by:   SplendourHui
* @Last modified time: 2016-10-14 19:06
*/

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import './style.less';

import {Row, Col, Icon, Dropdown, Menu} from 'antd';

import map from 'ramda/src/map';

const WULIHeader = ({className, title, logoHref, logoSrc, user}) => {
  const getLogoHref = () => logoHref || '#';

  const getLogoSrc = () =>
    logoSrc || 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg';

  const getMenuItem = (item) =>
    <Menu.Item key={item.key}>{item.title}</Menu.Item>;

  const getMenu = () => (
    <Menu onClick={user.onClick}>
      {map(getMenuItem, user.actions)}
    </Menu>
  );

  const getUserNamePart = () =>
    user.actions ? (
      <Dropdown overlay={getMenu()}>
        <a href="#">
          {user.name} <Icon type="down" />
        </a>
      </Dropdown>
    ) : user.name;

  const getUserPart = () =>
    user ? (
      <div className="wuli-user">
        <Icon type="user" />
        <span>
          {getUserNamePart()}
        </span>
      </div>
    ) : '';

  const cls = classNames({
    'wuli-header': true
  }, className);

  return (
    <header className={cls}>
      <Row>
        <Col span={4}>
          <Link className="wuli-logo" to={getLogoHref()}>
            <img src={getLogoSrc()} />
            <span>{title}</span>
          </Link>
        </Col>
        <Col span={16} />
        <Col span={4}>
          {getUserPart()}
        </Col>
      </Row>
    </header>
  );
};

WULIHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  logoHref: PropTypes.string,
  logoSrc: PropTypes.string,
  user: PropTypes.object
};

export default WULIHeader;
