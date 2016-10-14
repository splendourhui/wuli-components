/**
* @Author: SplendourHui
* @Date:   2016-05-10 17:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-10-14 19:13
*/

import React, {Component, PropTypes} from 'react';
import equals from 'ramda/src/equals';

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

const WULISlider = ({menus, openKeys, selectedKey,
  handleSelect, setOpenKeys, setSelectedKey, style}) => {
  const onClick = (e) => {
    setSelectedKey(e.key);
    handleSelect(e.key);
  };
  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  };
  const getItemTitle = item =>
    item.icon ? (
      <span><Icon type={item.icon} /><span>{item.title}</span></span>
    ) : item.title;
  const getMenus = menus => {
    let result = [];
    result = menus.map(item => {
      if (item.sub) {
        return (
          <SubMenu key={item.key} title={getItemTitle(item)}>
            {getMenus(item.sub)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} disabled={item.disabled}>{getItemTitle(item)}</Menu.Item>
        );
      }
    });
    return result;
  };
  return (
    <div className="wuli-slider">
      <Menu
        style={style}
        openKeys={openKeys}
        selectedKeys={[selectedKey]}
        onClick={onClick}
        onOpenChange={onOpenChange}
        mode="inline">
        {getMenus(menus)}
      </Menu>
    </div>
  );
};

WULISlider.propTypes = {
  menus: PropTypes.array.isRequired,
  openKeys: PropTypes.array,
  selectedKey: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
  setOpenKeys: PropTypes.func.isRequired,
  setSelectedKey: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default WULISlider;
