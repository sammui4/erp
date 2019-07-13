/**
 * @description 检验 策略模式
 */
import {isEmptyValue} from './utils';

let numberRE = /^-?\d+(\.\d+)?$/;
let positiveNumberRE = /^\d+(\.\d+)?$/;
// 检验策略
const STRATS = {
  // 必填项
  required (value, msg) {
    if (isEmptyValue(value)) {
      return msg;
    }
  },

  minLength (value, minLength, msg) {
    if (!isEmptyValue(value) && String(value).length < minLength) {
      return msg;
    }
  },

  maxLength (value, maxLength, msg) {
    if (!isEmptyValue(value) && String(value).length > maxLength) {
      return msg;
    }    
  },

  number (value, msg) {
    if (!isEmptyValue(value) && !numberRE.test(value)) {
      return msg;
    }     
  },

  positive (value, msg) {
    if (!isEmptyValue(value) && !positiveNumberRE.test(value)) {
      return msg;
    }    
  },
  // 函数动态校验
  verify (value, fn) {
    return fn(value);
  }
};

export default class Validator {
  constructor () {
    this.rules = [];
  }
  /**
   * 
   * @param {Any} value 校验值 
   * @param {String} type 检验类型 对应策略 :传额外参数 
   * @param {String} msg 返回信息 校验失败时返回 
   * @example add('minLength:6', '33', 'xxx最小长度不能小于6')
   * @example add('verify', 'ss', v => /^\d+$/.test(v) ? '' : '必须数字')
   */
  add (type, value, msg) {
    let args = type.split(':');
    let strat = args.shift();
    let rule = STRATS[strat];

    if (rule) {
      args.push(msg);
      args.unshift(value);

      this.rules.push(_ => rule.apply(null, args));
    }
  }

  start () {
    let rules = this.rules;
    let result = {isValid: true, msg: ''};

    if (!rules.length) {
      return result;
    }

    rules.some(rule => {
      let msg = rule();
      // 有东西返回就是不合法
      let illegal = !!msg;

      if (illegal) {
        result.msg = msg;
        result.isValid = false;
      }

      return illegal;
    })

    return result;
  }
}
