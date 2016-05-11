/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-09 11:30
 */



'use strict';

const co = require('co');
const jade = require('jade');

exports.index = function*() {
  this.redirect('/page/example');
};

exports.page = function*() {
  this.body = jade.renderFile('views/index.jade', {});
};
