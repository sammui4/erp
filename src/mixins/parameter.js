/**
 * @description 获取 mixins使用 不涉及任何业务 增加缓存 避免多次请求
 * @author 刘伟健
 */
import extend from 'extend';
// 地址缓存
const PARAMETER_CACHE = {};

export default {
  methods: {
    // 获取参数组 统一处理 返回相同引用 不会触发二次更新
    fetchParameter(code) {
      if (!code) {
        return Promise.resolve([]);
      }

      let cache = PARAMETER_CACHE[code];

      if (cache) {
        return cache instanceof Promise ? cache : Promise.resolve(cache);
      }

      let reqData = {
        parameterGroupCode: code
      };      

      PARAMETER_CACHE[code] = this.$http.post('crs/parameter/parameterGroup/getParamter.do', reqData)
        .then(res => {
          let resData = res.data;

          if (!resData || !resData.istrue) {
            return Promise.reject(new Error(resData.msg));
          }

          return (PARAMETER_CACHE[code] = resData.data || []);
        })
        .catch(_ => {
          delete PARAMETER_CACHE[code];

          return [];
        });

      return PARAMETER_CACHE[code];
    },
    
    /** 
     * @param {Array} codes 多个参数组编码
     * 会有以下情况
     *   1、当某个参数组编码已经存在时，直接剔除
     *   2、当多个参数组请求和单个参数组请求同时存在时，单个参数组不再发请求
     *   3、缓存已经获取过的参数组
     */
    fetchParameters(codes) {
      if (!codes.length) {
        return Promise.resolve({});
      }

      let promises = [];
      let resolves = {};
      let i = codes.length;

      while (i--) {
        let code = codes[i];
        let cache = PARAMETER_CACHE[code];

        if (cache) {
          promises.push(
            cache instanceof Promise
              ? cache.then(data => ({ [code]: data }))
              : Promise.resolve({ [code]: cache })
          );
          // 不必发送 直接删除
          codes.splice(i, 1);
        } else {
          // 不存在缓存中的 生成个Promise 防止二次发送
          PARAMETER_CACHE[code] = new Promise(resolve => resolves[code] = resolve);
        }
      } 

      // 如果还存在
      if (codes.length) {
        let reqData = {
          parameterGroupCode: codes
        };

        let promise = this.$http.post('crs/parameter/parameterGroup/getParamters.do', reqData)
          .then(res => {
            let resData = res.data;

            if (!resData || !resData.istrue) {
              return Promise.reject(new Error(resData.msg));
            }

            let data = resData.data;

            codes.forEach(code => {
              // resolve一下
              resolves[code](data[code]);
              // 存进去
              PARAMETER_CACHE[code] = data[code];
            });

            return data;
          })
          .catch(_ => {
            codes.forEach(code => {
              // resolve一下
              resolves[code]([]);

              delete PARAMETER_CACHE[code]
            });

            return {};
          });

        promises.push(promise);
      } 

      return Promise.all(promises).then(parameters => {
        let result = {};

        parameters.forEach(v => extend(result, v));

        return result;
      })
    }
  }
}
