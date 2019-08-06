/**
 * @description 封装decimal
 * @author 刘伟健
 */
import { isEmptyValue } from './utils';
import { Decimal } from 'decimal.js';

const math = {};

(['add', 'sub', 'mul', 'div']).forEach(method => {
  math[method] = function (...numbers) {
    let nums = [];

    numbers.forEach(number => {
      if (isEmptyValue(number)) {
        return;
      }

      number = parseFloat(number);

      if (isNaN(number)) {
        return;
      }

      nums.push(number);
    })

    if (!nums.length) {
      return '';
    }
    
    let d = new Decimal(nums.shift());

    nums.forEach(num => {
      d = d[method](num);
    })

    return d.toString();     
  }
})

math.toFixed = function (num1,num2) {
  if (!num1) {
    return '';
  }
  let d = new Decimal(num1);
  d = d.toFixed(num2);
  return d.toString();
}

export default math;
