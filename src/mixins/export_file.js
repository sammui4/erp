import saveAs from '@/utils/save_as';
import { isObject } from '@/utils/utils/';

export default {
  methods: {
    exportFile (opts) {
      let uri = opts.uri;

      if (!uri) {
        return Promise.reject(new Error('缺少uri'));
      }

      let reqData = opts.data || {};

      return this.$http.post(uri, reqData, {
        responseType: 'blob'
      })
      .then(res => {
        let blob = res.data;

        if (blob.type == 'application/json') {

          return new Promise((_, reject) => {
            let reader = new FileReader();

            reader.onload = function (e) {
              let data = JSON.parse(e.target.result);

              reject(new Error(data.msg));
            }

            reader.readAsText(blob);
          })
        }

        let reg = /filename\="([^"]+)"/;
        let dis = res.headers['content-disposition'];

        if (!dis || !reg.test(dis)) {
          return Promise.reject(new Error('导出失败'));
        }

        let filename = decodeURIComponent(RegExp.$1);

        saveAs(blob, filename);
      })
    }
  }
}