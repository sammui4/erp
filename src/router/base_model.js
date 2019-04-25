// 基础信息模块

export default [
    {
        name: "基础数据 ",
        path: 'basicIn_formation/index',
        component: () => import('@/views/basicIn_formation/index'),
        meta: {requireAuth: true}
    },
    {
        name: "行政区划",
        path:'basicIn_formation/area/area',
        component: () => import('@/views/basicIn_formation/area/area'),
        meta: {requireAuth: true}
    },
    // {
    //     name: "客户信息",
    //     path:'basicIn_formation/customer_information/customer_information',
    //     component: () => import('@/views/basicIn_formation/customer_information/customer_information'),
    //     meta: {requireAuth: true},
    // },
    // {
    //     name: "客户要求",
    //     path:'basicIn_formation/customer_information/customer_requirements',
    //     component: () => import('@/views/basicIn_formation/customer_information/customer_requirements'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "客户业务要求",
    //     path:'basicIn_formation/customer_information/customer_business',
    //     component: () => import('@/views/basicIn_formation/customer_information/customer_business'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "客户物流对照",
    //     path:'basicIn_formation/customer_information/customer_logistics',
    //     component: () => import('@/views/basicIn_formation/customer_information/customer_logistics'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "供应商信息",
    //     path:'basicIn_formation/supplier_information/supplier_information',
    //     component: () => import('@/views/basicIn_formation/supplier_information/supplier_information'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "供应商要求",
    //     path:'basicIn_formation/supplier_information/supplier_requirements',
    //     component: () => import('@/views/basicIn_formation/supplier_information/supplier_requirements'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "仓库",
    //     path:'basicIn_formation/warehouse_information/warehouse',
    //     component: () => import('@/views/basicIn_formation/warehouse_information/warehouse'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "库存货位",
    //     path:'basicIn_formation/warehouse_information/stock_level',
    //     component: () => import('@/views/basicIn_formation/warehouse_information/stock_level'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "存货信息",
    //     path:'basicIn_formation/inventory_information/inventory_information',
    //     component: () => import('@/views/basicIn_formation/inventory_information/inventory_information'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "存货金属分类",
    //     path:'basicIn_formation/inventory_information/inventory_classification',
    //     component: () => import('@/views/basicIn_formation/inventory_information/inventory_classification'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "生产车间",
    //     path:'basicIn_formation/production_information/production_workshop',
    //     component: () => import('@/views/basicIn_formation/production_information/production_workshop'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "机台信息",
    //     path:'basicIn_formation/production_information/machine_information',
    //     component: () => import('@/views/basicIn_formation/production_information/machine_information'),
    //     meta: {requireAuth: true}
    // },
    // {
    //     name: "账期设置",
    //     path:'basicIn_formation/financial_information/settlement_method_agreement',
    //     component: () => import('@/views/basicIn_formation/financial_information/settlement_method_agreement'),
    //     meta: {requireAuth: true}
    // },
]