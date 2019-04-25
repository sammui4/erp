# tianqi_erp

> 天奇ERP系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





文件说明
|-- src
|   |
|   |-- components                       组件
|   |   |-- dialog                         公共模态框
|   |   |-- inventory                      查询组件
|   |   |-- packages                       table组件
|   |   |-- sidebar                        侧边栏显示组件
|   |
|   |-- directives                       指令
|   |   |-- drag.js                        拖拽指令
|   |
|   |-- mixin                            混合
|   |   |-- area.js                        省市区联动(已废弃)
|   |   |-- area2.js                       省市区联动
|   |   |-- export_file.js                 导出文件
|   |   |-- location.js                    省市区缓存
|   |   |-- parameter.js                   参数缓存
|   |   |-- rights.js                      页面权限
|   |
|   |-- router                           vue-router
|   |   |-- access_model.js                系统管理
|   |   |-- base_model.js                  基础数据模块
|   |   |-- financial_model.js             财务管理
|   |   |-- generation_model.js            生产管理
|   |   |-- index.js                       路由index
|   |   |-- order_model.js                 订单管理
|   |   |-- price_model.js                 价格设置
|   |   |-- report_model.js                报表管理
|   |   |-- warehouse_model.js             仓库管理
|   |   |-- 路由对照表.txt
|   |
|   |-- store                            vuex
|   |
|   |-- utils                            函数
|   |   |-- element.js                     element.js组件引入
|   |   |-- fetch.js                       aixos封装
|   |   |-- math.js                        封装decimal
|   |   |-- navList.js                     权限展示
|   |   |-- noop.js                        队列
|   |   |-- queue_ajax.js                  队列
|   |   |-- save_as.js                     导出文件
|   |   |-- token.js                       localStorage封装
|   |   |-- utils.js                       公共函数
|   |   |-- validator.js                   基于策略模式的验证
|   |
|   |-- views                             主视图
|   |
|   |-- static                            静态资源文件
