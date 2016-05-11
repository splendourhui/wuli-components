/**
 * @Author: SamChan
 * @Date:   2016-05-05T10:53:55+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T11:03:53+08:00
 */



'use strict';

const request = require('superagent');
const _ = require('lodash');
const serverConfig = require('config')
  .get('serverConfig');

exports.send = function*(method, path, query, data, ctx, postDeal) {
  const result = yield sendRequest(method, path, query, data, ctx);
  if (postDeal) {
    postDeal.data = result;
  } else {
    ctx.body = result;
  }
};

function sendRequest(method, path, query, data, ctx) {
  return new Promise((resolve, reject) => {
    const q = request[method](`${serverConfig.url}/${path}`)
      .query(_.extend({
        username: ctx.state.info.username
      }, query || {}));

    if (data) {
      q.send(data);
    }

    if (method === 'post' || method === 'put') {
      q.type('form');
    }

    q.end((err, result) => {
      if (err) {
        ctx.logger.error(err);
        ctx.logger.error(err.response.text);
        reject(err.response.text);
      } else {
        if (result.body) {
          resolve(result.body);
        } else {
          reject(result.text);
        }
      }
    });
  });
}
