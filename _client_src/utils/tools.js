/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:29:29+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T17:43:20+08:00
 */



import React from 'react';

export default {

  isIE8: () => window.navigator.userAgent.indexOf('MSIE 8.0') >= 0,

  isIE9: () => window.navigator.userAgent.indexOf('MSIE 9.0') >= 0,

  getCookie: name => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }
};
