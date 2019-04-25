/**
 * 获取页面权限
 */
import store from '@/store';

const FORMAT_MAP = {
  funcs (data) {
    let result = {};

    data.forEach(v => result[v.privateCode] = true);

    return result;
  }
};

export default {
  data () {
    return {
      btnRights: {}
    }
  },

  methods: {
    fetchPageRights () {
      let path = this.$router.currentRoute.path;
      
      path = path.replace(/\/$/, '');    

      return Promise.all([
        store.dispatch('getCurrentUser'),
        store.dispatch('getNavs')
      ])
      .then(([cu, { map }]) => {
        let userId = cu.userId;
        let menuId = map[path];

        return this.$http.post('crs/oaas/private/getPrivates.do', { menuId, userId });
      })
      .then(res => {
        let resData = res.data;
        let data = resData.data;

        if (!resData.istrue || !data) {
          return Promise.reject(resData.msg);
        }

        let result = {};

        Object.keys(data).forEach(key => {
          let v = data[key];
          let m = FORMAT_MAP[key];

          result[key] = m ? m(v) : v;
        })

        return result;
      })
    }
  },

  created () {
    this.fetchPageRights()
      .then(data => this.btnRights = data.funcs)
      .catch(e => this.$message.error(e.message));  
  }
}