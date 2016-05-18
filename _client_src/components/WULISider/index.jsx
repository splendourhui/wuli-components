/**
* @Author: SplendourHui
* @Date:   2016-05-10 17:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-18 15:44
*/

import React, {Component, PropTypes} from 'react';

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;

class WULISlider extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.setSelectedKey(e.key);
    this.props.handleSelect(e.key);
  }

  onToggle(info) {
    this.props.setOpenKeys(info.open ? info.keyPath : info.keyPath.slice(1));
  }

  render() {
    this.handleClick = this.handleClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    const {menus} = this.props;

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
        <Menu onClick={this.handleClick}
          style={this.props.style}
          openKeys={this.props.openKeys}
          selectedKeys={[this.props.selectedKey]}
          onOpen={this.onToggle}
          onClose={this.onToggle}
          mode="inline">
          {getMenus(menus)}
        </Menu>
      </div>
    );
  }
}

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
