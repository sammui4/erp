export default {
  bind: function (el, binding, vnode){
    let targetObj = el;

    // console.log(targetObj)
    targetObj.onmousedown = function (e) {
      // 鼠标按下，计算当前元素距离可视区的距离
      let disX = e.clientX - targetObj.offsetLeft;
      let disY = e.clientY - targetObj.offsetTop;
      document.onmousemove = function (e) {

        let l = e.clientX - disX;
        let t = e.clientY - disY;
        let winW=document.documentElement.clientWidth || document.body.clientWidth;
        let winH=document.documentElement.clientHeight || document.body.clientHeight;
        let maxW=winW-targetObj.offsetWidth;
        let maxH=winH-targetObj.offsetHeight;

        if (l<0) {
          l=0
        }else if(l>maxW){
          l=maxW;
      }

        if (t<0) {
          t=0
        }else if(t>maxH){
          t=maxH;
      }

        //移动当前元素
        targetObj.style.left = l + 'px';
        targetObj.style.top = t + 'px';
      };
      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
}
}
