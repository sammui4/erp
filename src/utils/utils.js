export function isEmptyValue(v) {
  return v == null || v === '';
}

export function formatDate(date, fmt) {
  if (!date) {
    return '';
  }

  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
export function getToday(){
  var date = new Date();
  var year  = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var str = `${year}-${month}-${day}`
  return Date.parse(new Date(str))
}
export function getToMonth(){
  var date = new Date();
  var year  = date.getFullYear();
  var month = date.getMonth()+1;
  var str =`${year}-${month}-01`
  return +new Date(str)
}
// 四舍五入 ，num是要处理的值，n是四舍五入位数
export function toFixed(num,n){
  var num = num*1;
  var pow = Math.pow(10,n);
  return Math.round(num*pow)/pow
}
export function getdayAfter(days){
  var today = getToday();
  var after = days*1000*60*60*24
  return today+after

}
export function getdayBefore(days){
  var today = getToday();
  var before = days*1000*60*60*24
  return today-before
}

export function isNullOrUndefined(v) {
  return v == null;
}


/**
 * @description 用于获取数组中的id
 * @export
 * @param {Array} Arr     传入的数组
 * @param {String} idName  id名字
 * @returns
 */
export function getIdArray1(Arr,idName){
  var array = Arr.map((obj)=>{
    return obj[idName]*1
  })
  return array
}

let _toString = Object.prototype.toString;

function isType(type) {
  return function (o) {
    return _toString.call(o) === '[object ' + type + ']';
  }
}

export let isArray = Array.isArray || isType('Array');
export let isObject = isType('Object');
export let isDate = isType('Date');

let _hasOwn = Object.prototype.hasOwnProperty;

export function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}

export function capitalize(s) {
  if (!s) {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.substring(1);
}

export function isEmptyObject(o) {
  for (let i in o) {
    return false;
  }

  return true;
}

//
export function getNumFromBrackets(str){
  return str.match(/\{[^\}]+\}/g)
}

export function trimZero(str) {
  if (!str) {
    return str;
  }

  let numRE = /\d+\.\d+/g;
  let zeroRE = /\.?0+$/;

  return String(str).replace(numRE, num => {
    return num.replace(zeroRE, '');
  })
}

/**
 * @description 去掉多余的小数位
 * @param {Number|String} number
 * @param {Number} retain
 */
let numberRE = /^-?\d+(\.\d+)?$/;

export function removeExtraDecimals (number, retain = 5) {
  if (isEmptyValue(number)) {
    return number;
  }

  let str = String(number);

  if (!numberRE.test(str)) {
    return number;
  }

  let index = str.indexOf('.');

  if (index === -1) {
    return number;
  }

  let decimal = str.substring(index + 1);

  if (decimal.length <= retain) {
    return number;
  }

  let digits = decimal.substring(0, retain);
  let integer = parseInt(str.substring(0, index));

  let next = decimal.charAt(retain);
  // 四舍五入
  if (next >= 5) {
    // 找一个非9
    let i = digits.length;

    while (i-- && digits.charAt(i) === '9') {}
    // 存在一个非9
    if (i >= 0) {
      let c = parseInt(digits.charAt(i)) + 1;

      digits = digits.substring(0, i) + c;
    } else {
      digits = '';
      integer = integer + (number >= 0 ? 1 : -1);
    }
  }

  if (!digits) {
    return integer;
  }

  return parseFloat(`${integer}.${digits}`);
}
