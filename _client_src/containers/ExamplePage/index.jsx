/**
* @Author: SamChan
* @Date:   2016-05-05T15:02:42+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-13 11:39
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
import WULIConfirmDialog from '../../components/WULIConfirmDialog';
import WULIGlobalLoading from '../../components/WULIGlobalLoading';
import WULIToast from '../../components/WULIToast';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';

class ExamplePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.commonActions.showLoading('正在加载，请稍候...');
    setTimeout(() => {
      this.props.messageActions.showToast('success', '成功提示');
    }, 3000);
  }

  handleSelect(key) {
    console.log(`Select key: ${key}`);
  }

  showModal() {
    this.props.dialogActions.showConfirmDialog('确认要删除此数据吗？', () => {
      this.props.dialogActions.showConfirmLoading();
    });
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
              <Spin spinning={true}>
                <h1>主窗口</h1>
              </Spin>
              <div>
                <Button onClick={this.showModal.bind(this)}>确认框</Button>
              </div>
            </Col>
          </Row>
        </div>
        <WULIConfirmDialog title="操作确认"
          show={this.props.dialog.confirmDialog.show}
          content={this.props.dialog.confirmDialog.msg}
          confirmLoading={this.props.dialog.confirmLoading}
          handleOK={this.props.dialog.confirmDialog.confirmAction}
          handleCancel={this.props.dialogActions.closeConfirmDialog}
          />
        <WULIGlobalLoading show={this.props.loading.show}
          content={this.props.loading.msg} />
        <WULIToast show={this.props.message.toast.show}
          type={this.props.message.toast.msgType}
          hold={this.props.message.toast.hold}
          hideToast={this.props.messageActions.hideToast}
          content={this.props.message.toast.msg} />
      </div>
    );
  }
}

ExamplePage.propTypes = {
  loading: PropTypes.object,
  dialog: PropTypes.object,
  message: PropTypes.object,
  commonActions: PropTypes.object,
  messageActions: PropTypes.object,
  dialogActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    query: state.router.location.query,
    loading: state.loading,
    dialog: state.dialog,
    message: state.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    commonActions: bindActionCreators(commonActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);
