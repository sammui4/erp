import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';
import store from '@/store';

// 引入基础信息路由配置
import base_model from './base_model';

// 引入订单管理路由配置
import order_model from './order_model';

// 引入仓库管理路由配置
import warehouse_model from './warehouse_model';

// 引入生产管理路由配置
import generation_model from './generation_model';

// 引入价格设置路由配置
import price_model from './price_model';

// 引入财务管理路由配置
import financial_model from './financial_model';

// 引入报表管理路由配置
import report_model from './report_model';

// 引入系统管理路由配置
import access_model from './access_model';

Vue.use(Router)

const router = new Router({
    routes: [

        {
            name: "登录页",
            path: '/views/login',
            component: () => import('@/views/login/login'),
            meta: {requireAuth: false}
        },

        {
            name: "拒绝访问",
            path: '/views/404',
            component: () => import('@/views/404'),
            meta: { requireAuth: false }
        },

        {
            name: "表格Demo",
            path: '/views/table_demo',
            component: () => import('@/views/table_demo'),
            meta: { requireAuth: false }
        },

        {
            name: "主页",
            path: '/views',
            component: () => import('@/views/home'),
            children: [
                {
                    name: "首页",
                    path: 'index',
                    component: () => import('@/views/index'),
                    meta: { requireAuth: true }
                },
                
                // 基础数据模块 begin
                ...base_model,
                // 基础数据模块 end

                // 订单管理 begin
                ...order_model,
                // 订单管理 end

                // 仓库管理 begin
                ...warehouse_model,
                // 仓库管理 end

                // 生产管理 begin
                ...generation_model,
                // 生产管理 end

                // 价格设置 begin
                ...price_model,
                
                // 价格设置 end

                // 财务管理 begin
                ...financial_model,
                // 财务管理 end

                // 报表管理 begin
                ...report_model,
                // 报表管理 end

                // 系统管理 begin
                ...access_model
                // 系统管理 end
            ]
        }

    ]
})

router.beforeEach((to, from, next) => {
    NProgress.done();

	// 当不需要检验时 直接走 例如登录页 404啊
	if (!to.meta.requireAuth) {
		return next();
	}
	// 当token不存在时 需要用户重新去登录
	if (!getToken()) {
		return next('/views/login');
	}
	// 数据加载条 开始加载
	NProgress.start();
	// 接下来就是检验的时刻
	store.dispatch('getNavs')
        .then(({ map }) => {

            let toPath = to.path.replace(/\/$/, '');

			// 当权限不存在时 去404
            if (!map[toPath]) {
                return next('/views/404');
            }

            // 此处去设置当前激活的一级菜单 二级菜单 和 底部固定的tab
            store.commit('setMenu', toPath);

            next();
		})
		.catch(_ => {
            alert(`router出错：${_.message}`);
			// 出错之后 去登录页
			next('/views/login');
		})

})

router.afterEach((to, from) => {

    // 数据加载条 加载完成
    NProgress.done()

})

export default router
