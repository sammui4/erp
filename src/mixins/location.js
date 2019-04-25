/**
 * @description 地址操作 mixins使用 不涉及任何业务 增加地址缓存 避免多次请求
 * @author 刘伟健
 */
// 地址缓存
const AREA_CACHE = {};
// 请求映射表
const REQUEST_MAP = {
  province: {
    uri: 'crs/division/baseDivision/selectDivisionProvice.do',

    data() {
      return { baseDivision: '' };
    },

    format(data) {
      return data.map(v => ({ label: v.provice, value: v.proviceCode }));
    }
  },

  city: {
    uri: 'crs/division/baseDivision/selectDivisionLand.do',

    data(code) {
      return { baseDivision: { proviceCode: code } };
    },

    format(data) {
      return data.map(v => ({ label: v.land, value: v.landCode }));
    }
  },

  district: {
    uri: 'crs/division/baseDivision/selectDivision.do',

    data(code) {
      return { baseDivision: { landCode: code } }
    },

    format(data) {
      return data.map(v => ({ label: v.district, value: v.districtCode }));
    }    
  },

  town: {
    uri: 'crs/division/baseDivision/selectDivisionTown.do',

    data(code) {
      return { baseDivision: { districtCode: code } };
    },

    format(data) {
      return data.map(v => ({ label: v.town, value: v.townCode }));
    }     
  }
};

export default {
  methods: {
    // 根据地址名称，在当前列表中查找code
    getAreaCode(areaName, areas) {
      let code = '';

      if (!areaName || !areas || !areas.length) {
        return code;
      }

      areas.some(v => {
        if (v.label === areaName) {
          code = v.value;
          return true;
        }
      })

      return code;
    },
    // 获取地址 统一处理 不建议直接调用
    fetchAreas(type, code) {
      if (!code) {
        return Promise.resolve([]);
      }

      let cache = AREA_CACHE[code];

      if (cache) {
        return cache instanceof Promise ? cache : Promise.resolve(cache);
      }

      let v = REQUEST_MAP[type];

      AREA_CACHE[code] = this.$http.post(v.uri, v.data(code))
        .then(res => { 
          let resData = res.data;

          if (!resData || !resData.istrue) {
            return Promise.reject(new Error(resData.msg));
          }

          return (AREA_CACHE[code] = v.format(resData.data || []));
        })
        .catch(_ => {
          delete AREA_CACHE[code];

          return [];
        });

      return AREA_CACHE[code];
    },
    // 获取省
    fetchProvinces() {
      return this.fetchAreas('province', '__provinces__');
    },
    // 获取市
    fetchCities(code) {
      return this.fetchAreas('city', code);
    },
    // 获取区
    fetchDistricts(code) {
      return this.fetchAreas('district', code);
    },
    // 获取镇
    fetchTowns(code) {
      return this.fetchAreas('town', code);
    },
  }
}
