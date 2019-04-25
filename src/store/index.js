// vuex 数据中心

import Vuex from 'vuex';
import Vue from 'vue';
import instance from '@/utils/fetch';
import extend from 'extend';
import { removeToken } from '@/utils/token';

Vue.use(Vuex);

// 提取链接
function extract(data, map) {
  map = map || {};

  data.forEach(item => {

    let url = item.menuUrl;

    if (url) {
      let key = '/views' + url.replace(/\/$/, '');

      map[key] = item.menuId;
    }

    if (item.children && item.children.length) {
      return extract(item.children, map);
    }
  })

  return map;
}

/**
 * @description 找菜单
 * @param {*} data 菜单列表
 * @param {*} levelOne 是否为一级
 * @returns {Boolean} 
 */
function find({ data, path, levelOne, result }) {
  return data.some(item => {
    let url = item.menuUrl;

    if (url) {
      url = '/views' + url.replace(/\/$/, '');

      if (url === path) {
        result.aside = item;

        if (levelOne) {
          result.nav = item;
        }

        return true;
      }
    }

    if (item.children && item.children.length) {
      let has = find({
        data: item.children, 
        path,
        levelOne: false, 
        result
      });

      if (has && levelOne) {
        result.nav = item;
      }

      return has;
    }

    return false;
  })
}

function isIndexView(path) {
  return path === '/views/index';
}

const PROMIS_CACHE = {};

const store = new Vuex.Store({
  state: {
    currentUser: {},
    // 一级菜单
    currentNavs: [],
    // 当前的一级菜单
    currentNav: null,    
    // 二级菜单
    currentAsides: [],
    // 底部tabs
    currentTabs: [],
    // 当前tab
    currentTabIndex: '0'
  },

  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },

    setCurrentNavs(state, currentNavs) {
      state.currentNavs = currentNavs;
    },
    /**
     * @description 清空当前用户信息 
     */
    clearUserData(state) { 
      state.currentUser = {};
      state.currentNavs = [];
      state.currentNav = null;
      state.currentAsides = [];
      state.currentTabs = [];
      state.currentTabIndex = '0';
      PROMIS_CACHE.USER = null;
      PROMIS_CACHE.MENU = null;
      // 清空token
      removeToken();
    },

    /**
     * 设置一级菜单 二级菜单 底部tab相关
     */
    setMenu(state, path) {
      // 首页 清掉相关数据
      if (isIndexView(path)) {
        state.currentNav = null;
        state.currentAsides = [];   
        state.currentTabs = [];
        state.currentTabIndex = '0';   
        
        return;
      }

      let navs = state.currentNavs;
      let result = {};

      find({
        data: navs,
        path,
        levelOne: true,
        result
      });

      let nav = result.nav;
      let aside = result.aside;      

      if (!nav || !aside) {
        return;
      }

      // 相同值 不会触发二次diff
      state.currentNav = nav;
      state.currentAsides = nav.children || [];

      let tabs = state.currentTabs;
      let index = tabs.indexOf(aside);

      if (index === -1) {
        tabs.push(aside);
        index = tabs.length - 1;
      }

      state.currentTabIndex = index + '';
    },

    setCurrentTabIndex(state, index) {
      state.currentTabIndex = index + '';
    },

    removeTabByIndex (state, index) {
      index = Number(index);
      
      state.currentTabs.splice(index, 1);
    }
  },

  actions: {
    getCurrentUser(context) {
      if (PROMIS_CACHE.USER) {
        return PROMIS_CACHE.USER;
      }

      PROMIS_CACHE.USER = instance.post('token/getCurrentUser.do', {})
        .then(res => {
          let resData = res.data;
          let cu = resData.data;

          if (!resData.istrue || !cu) {
            return Promise.reject(new Error(resData.msg));
          }

          context.commit('setCurrentUser', cu);

          return extend(true, {}, cu);
        });

      return PROMIS_CACHE.USER;
    },

    getNavs(context) {

      if (PROMIS_CACHE.MENU) {
        return PROMIS_CACHE.MENU;
      }

      PROMIS_CACHE.MENU = context.dispatch('getCurrentUser')
        .then(cu => {
          return instance.post('/crs/oaas/menu/getPrivateMenus.do', { userId: cu.userId });         
        })
        .then(res => {
          let resData = res.data;
          let data = resData.data;

          if (!resData.istrue || !data) {
            return Promise.reject(new Error(resData.msg));
          }

          context.commit('setCurrentNavs', data);

          let menu = extend(true, [], data);
          let map = extract(menu);
          // 这里添加首页权限
          map['/views/index'] = 'views_index';

          return { menu, map };
        });  

      return PROMIS_CACHE.MENU;
    }
  }
})

export default store