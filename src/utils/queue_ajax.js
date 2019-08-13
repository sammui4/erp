/**
 * 队列控制ajax
 */
import noop from './noop';
// 队列
const Q = [];
// 同时存在的请求数量
const L = 3;
// 当前的请求数量
let c = 0;
// 出队
function dequeue () {
  if (!Q.length) {
    return;
  }

  if (c < L) {
    c++;

    let fn = Q.shift();
    // 无论成功与否都往下走
    fn().catch(noop).then(_ => {
      c--;

      dequeue();
    })
  }
}


function loadReferencePrices (records) {

  let model = this.model;
  let total = records.length;

  if (!total) {
    return Promise.resolve();
  }

  return new Promise(resolve => {

    let complete = () => {
      if (!(--total)) {
        resolve();
        this.isOperating = false;
      }
    }

    this.isOperating = true;
    this.operatingTip = '正在计算参考单价';

    records.forEach(record => {
      queueAjax(() => {
        return this.fetchReferencePrice(record)
          .then(data => {
            complete();

            this.setReferencePrice(record, data);
          });
      })
    })
  })
};

export default function queueAjax (fn) {
  Q.push(fn);

  dequeue();
}
