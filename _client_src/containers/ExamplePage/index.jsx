/**
* @Author: SamChan
* @Date:   2016-05-05T15:02:42+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-11 19:30
*/

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './style.less';

import * as commonActions from '../../actions/common';
import * as messageActions from '../../actions/common_message';
import * as dialogActions from '../../actions/common_dialog';

import WULISider from '../../components/WULISider';
import WULIHeader from '../../components/WULIHeader';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class ExamplePage extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    console.log(`Select key: ${key}`);
  }

  render() {
    const getMenus = () => [
      {
        key: 'sub1',
        title: '导航1',
        icon: 'mail',
        sub: [
          {
            key: '1',
            title: '选项1'
          },
          {
            key: '2',
            title: '选项2',
            sub: [
              {
                key: '3',
                title: '子选项'
              }
            ]
          }
        ]
      },
      {
        key: 'sub2',
        title: '导航2',
        icon: 'appstore',
        sub: [
          {
            key: '4',
            title: '选项4',
            disabled: true
          },
          {
            key: '5',
            title: '选项5'
          }
        ]
      }
    ];

    return (
      <div className="example-page">
        <WULIHeader title="WULI Design"
          logoHref="#"
          user={{name: '郑南辉'}}
          />
        <div className="main-wrapper">
          <Row>
            <Col span={4}>
              <WULISider
                menus={getMenus()}
                openKeys={['sub1', '2']}
                selectedKey={`3`}
                handleSelect={this.handleSelect.bind(this)}
                />
            </Col>
            <Col className="main-container" span={20}>
              <h1>主窗口</h1>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

ExamplePage.propTypes = {};

function mapStateToProps(state) {
  return {query: state.router.location.query};
}

function mapDispatchToProps(dispatch) {
  return {
    commonActions: bindActionCreators(commonActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);
