export default {
    // 绑定时创建或展示图片弹出框
    bind (el, binding, vnode) {
        let show = (e) => {
            let curImg = e.target;
            let imgSrc = curImg.src;
            if (imgSrc === 'https://image.pyl.com/without/o_1cbo4oq37eba1hpf89f17f137ua/no-img.png') return;
            // 图片展示框
            let imgBoxElem = document.getElementById('floatImgBox');
            if (!imgBoxElem) {
                // 创建图片展示框
                imgBoxElem = document.createElement('DIV');
                imgBoxElem.id = 'floatImgBox';
                imgBoxElem.style.cssText = `
                    z-index: 5000;
                    display: none;
                    position: fixed;
                    justify-content: center;
                    align-items: center;
                    width: 300px;
                    height: 300px;
                    border: 2px solid #eee;
                    border-radius: 4px;
                    background: #fff;`;
                let img = document.createElement('IMG');
                img.id = 'floatImg';
                img.style.maxWidth = '98%';
                img.style.maxHeight = '98%';
                img.style.display = 'none';
                let loading = document.createElement('DIV');
                loading.id = 'floatImgLoading';
                loading.style.position = 'absolute';
                let loadingText = document.createTextNode('Loading...');
                loading.appendChild(loadingText);
                imgBoxElem.appendChild(loading);
                imgBoxElem.appendChild(img);
                document.body.appendChild(imgBoxElem);
            }
            let imgElem = document.getElementById('floatImg');
            let loading = document.getElementById('floatImgLoading');
            if (e.type !== 'mousemove') {
                loading.style.display = 'block';
                // 设置图片src
                // 切割七牛处理过的图片
                let idx = imgSrc.indexOf('?image');
                imgElem.src = idx > -1 ? imgSrc.slice(0, idx) : imgSrc;
            }
            imgElem.onload = function () {
                loading.style.display = 'none';
                imgElem.style.display = 'block';
            }
            // 设置图片展示框定位
            const IMG_BOX_WIDTH = 300;
            let top, bottom, left;

            // 视口高度
            let viewHeight = document.documentElement.clientHeight;
            // 鼠标到视口底部高度
            let height = viewHeight - e.clientY;

            if (height > IMG_BOX_WIDTH) {
                top = e.clientY + 'px';
                bottom = 'auto';
            } else {
                top = 'auto';
                bottom = height + 'px';
            }
            imgBoxElem.style.top = top;
            imgBoxElem.style.bottom = bottom;
            imgBoxElem.style.left = el.getBoundingClientRect().right + 30 + 'px';
            imgBoxElem.style.display = 'flex';
        };

        let hide = () => {
            let imgBoxElem = document.getElementById('floatImgBox');
            if (imgBoxElem) imgBoxElem.style.display = 'none';
        };
        el.addEventListener('mouseover', show);
        el.addEventListener('mousemove', show);
        el.addEventListener('mouseout', hide);
    }
};
