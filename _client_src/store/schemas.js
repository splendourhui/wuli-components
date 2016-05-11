/**
 * @Author: SamChan
 * @Date:   2016-05-05T15:25:10+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T16:35:43+08:00
 */



import {
  Schema,
  arrayOf
} from 'normalizr';

const response = new Schema('response');

export default {
  NORMAL_RESP: response
};
