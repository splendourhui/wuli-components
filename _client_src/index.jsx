/**
 * @Author: SamChan
 * @Date:   2016-05-05T11:16:22+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-11 11:45
 */

import React from 'react';
import ReactDom from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import 'antd/dist/antd.min.css';

const store = configureStore();

ReactDom.render(
  <Root store={store}/>, document.getElementById('app'));
