export default [
    {
        menuName: "基础信息",
        menuCode:"basic_information",
        menuUrl:"/basicIn_formation/index",
        menuIcon:"jichuxinxi",
        children:[
            {
                menuName: "行政区划",
                menuCode:'basicIn_Modules_area',
                children: [
                    {
                        menuName: "行政区划",
                        menuCode:'area',
                        menuIcon: "hangzhengquhua",
                        menuUrl: "/basicIn_formation/area/area",
                        funcs: []

                    }
                ]
            },
            {
                menuName: "客户基础信息",
                menuCode:'basicIn_Modules_customer',
                children: [
                    {
                        menuName: "客户信息",
                        menuCode:"customer_information",
                        menuIcon: "kehuxinxi",
                        menuUrl: "/basicIn_formation/customer_information/customer_information",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "change_record",funcName: "变更记录"}
                        ]
                    },
                    {
                        menuName: "客户要求",
                        menuCode:'customer_requirements',
                        menuIcon: "kehuyaoqiu",
                        menuUrl: "/basicIn_formation/customer_information/customer_requirements",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    },
                    {
                        menuName: "客户业务关系",
                        menuCode:'customer_business',
                        menuIcon: "kehuyewuguanxi",
                        menuUrl: "/basicIn_formation/customer_information/customer_business",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"}
                        ]
                    },
                    {
                        menuName: "客户物料对照",
                        menuCode:'customer_logistics',
                        menuIcon: "kehuwuliaoduizhao",
                        menuUrl: "/basicIn_formation/customer_information/customer_logistics",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            },
            {
                menuName: "供应商基础信息",
                menuCode:'basicIn_Modules_supplier',
                children: [
                    {
                        menuName: "供应商信息",
                        menuCode:'supplier_information',
                        menuIcon: "gongyingshangxinxi",
                        menuUrl: "/basicIn_formation/supplier_information/supplier_information",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "change_record",funcName: "变更记录"},
                        ]
                    },
                    {
                      menuName: "供应商要求",
                      menuCode:'supplier_requirements',
                      menuIcon: "gongyingshangbaojia",
                      menuUrl: "/basicIn_formation/supplier_information/supplier_requirements",
                      funcs: [
                        {funcCode: "add",funcName: "新增"},
                        {funcCode: "modify",funcName: "修改"},
                        {funcCode: "delete",funcName: "删除"},
                        {funcCode: "isEffect_Y",funcName: "生效"},
                        {funcCode: "isEffect_N",funcName: "失效"}
                      ]
                    }
                ]
            },
            {
                menuName: "仓库基础信息",
                menuCode:'basicIn_Modules_warehouse',
                children: [
                    {
                        menuName: "仓库",
                        menuCode:'warehouse',
                        menuIcon: "cangku",
                        menuUrl: "/basicIn_formation/warehouse_information/warehouse",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    },
                    {
                        menuName: "库区货位",
                        menuCode:'stock_level',
                        menuIcon: "kucunhuowei",
                        menuUrl: "/basicIn_formation/warehouse_information/stock_level",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            },
            {
                menuName: "存货基础信息",
                menuCode:'basicIn_Modules_inventory',
                children: [
                    {
                        menuName: "存货金属分类",
                        menuCode:'inventory_classification',
                        menuIcon: "cunhuojichufenlei",
                        menuUrl: "/basicIn_formation/inventory_information/inventory_classification",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                        ]
                    },
                    {
                        menuName: "存货信息",
                        menuCode:'inventory_information',
                        menuIcon: "cunhuoxinxi",
                        menuUrl: "/basicIn_formation/inventory_information/inventory_information",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            },
            {
                menuName: "生产基础信息",
                menuCode:'basicIn_Modules_production',
                children: [
                    {
                        menuName: "生产车间",
                        menuCode:'production_workshop',
                        menuIcon: "shengchanchejian",
                        menuUrl: "/basicIn_formation/production_information/production_workshop",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    },
                    {
                        menuName: "机台信息",
                        menuCode:'machine_information',
                        menuIcon: "jitaixinxi",
                        menuUrl: "/basicIn_formation/production_information/machine_information",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            },
            {
                menuName: "财务基础信息",
                menuCode:'basicIn_Modules_financial',
                children: [
                    {
                        menuName: "账期设置",
                        menuCode:'settlement_method_agreement',
                        menuIcon: "jiesuanfangshixieyi",
                        menuUrl: "/basicIn_formation/financial_information/settlement_method_agreement",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        menuName: "订单管理",
        menuCode:"order_management",
        menuUrl:"/order_management/index",
        menuIcon:"caigouguanli",
        children:[
            {
                menuName: "合同管理",
                menuCode:'order_Modules_contract',
                children: [
                    {
                        menuName: "采购合同",
                        menuCode:'purchase_contract',
                        menuIcon: "caigouhetong",
                        menuUrl: "/order_management/contracts_management/purchase_contract",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "print",funcName: "打印"}
                        ]
                    },
                    {
                        menuName: "销售合同",
                        menuCode:'sales_contract',
                        menuIcon: "xiaoshouhetong",
                        menuUrl: "/order_management/contracts_management/sales_contract",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "print",funcName: "打印"}
                        ]
                    }
                ]
            },
            {
                menuName: "采购业务",
                menuCode:'order_Modules_purchase',
                children: [
                    {
                        menuName: "采购订单",
                        menuCode:'purchase_orders',
                        menuIcon: "caigoudingdan",
                        menuUrl: "/order_management/procurement_operations/purchase_orders",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "print",funcName: "打印"}
                        ]
                    },
                    {
                        menuName: "采购订单明细",
                        menuCode:'purchase_orders_detail',
                        menuIcon: "caigoudingdanmingxi",
                        menuUrl: "/order_management/procurement_operations/purchase_orders_detail",
                        funcs: [
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "export_excel",funcName: "导出excel"}
                        ]
                    },
                    {
                        menuName: "采购到货单",
                        menuCode:'purchase_arrival',
                        menuIcon: "caigoudaohuodan",
                        menuUrl: "/order_management/procurement_operations/purchase_arrival",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"}
                        ]
                    },
                    {
                        menuName: "采购退货申请单",
                        menuCode:'purchase_return_goods',
                        menuIcon: "caigoutuihuoshenqingdan",
                        menuUrl: "/order_management/procurement_operations/purchase_return_goods",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "entry_return_date",funcName: "录入退货日期"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"}
                        ]
                    }
                ]
            },
            {
                menuName: "销售业务",
                menuCode:'order_Modules_sales',
                children: [
                    {
                        menuName: "销售订单",
                        menuCode:'sales_orders',
                        menuIcon: "xiaoshoudingdan",
                        menuUrl: "/order_management/sales_operations/sales_orders",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "print",funcName: "打印"}
                        ]
                    },
                    {
                        menuName: "销售订单明细",
                        menuCode:'sales_orders_detail',
                        menuIcon: "xiaoshoudingdanmingxi",
                        menuUrl: "/order_management/sales_operations/sales_orders_detail",
                        funcs: [
                            {funcCode: "modify_addr",funcName: "修改送货地址"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "export_excel",funcName: "导出excel"}
                        ]
                    },
                    {
                        menuName: "销售退货申请单",
                        menuCode:'sales_return_goods',
                        menuIcon: "xiaoshoutuihuoshenqingdan",
                        menuUrl: "/order_management/sales_operations/sales_return_goods",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"}
                        ]
                    }
                ]
            },
            {
                menuName: "加工业务",
                menuCode:'order_Modules_machining',
                children: [
                    {
                        menuName: "委外加工合同",
                        menuCode:'commission_machining_contract',
                        menuIcon: "weiwaijiaoliaojiagong",
                        menuUrl: "/order_management/machining_operations/commission_machining_contract",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "devivery_plan",funcName: "交付计划"},
                            {funcCode: "angleMaterial_devivery",funcName: "边角料交付"},
                            {funcCode: "original_material",funcName: "原材到货"},
                            {funcCode: "close",funcName: "关闭"}
                        ]
                    },
                    {
                        menuName: "委外边角料交付订单",
                        menuCode:'commission_angleMaterial_orders',
                        menuIcon: "weiwaijiaoliaojiagong",
                        menuUrl: "/order_management/machining_operations/commission_angleMaterial_orders",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"}
                        ]
                    },
                    {
                        menuName: "委外原材到货单",
                        menuCode:'commission_return_orders',
                        menuIcon: "weiwaijiaoliaojiagong",
                        menuUrl: "/order_management/machining_operations/commission_return_orders",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                        ]
                    },
                    {
                        menuName: "客户加工合同",
                        menuCode:'custom_machining_contract',
                        menuIcon: "kehujiaoliaojiagongdingdan",
                        menuUrl: "/order_management/machining_operations/custom_machining_contract",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "angleMaterial_come",funcName: "边角料来料"},
                            {funcCode: "product_devivery",funcName: "成品交付"},
                            {funcCode: "close",funcName: "关闭"},
                        ]
                    },
                    {
                        menuName: "客户边角料来料订单",
                        menuCode:'costomer_angleMaterial_orders',
                        menuIcon: "kehujiaoliaojiagongdingdan",
                        menuUrl: "/order_management/machining_operations/costomer_angleMaterial_orders",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                        ]
                    },
                    {
                        menuName: "客户成品交付订单",
                        menuCode:'costomer_Product_orders',
                        menuIcon: "kehujiaoliaojiagongdingdan",
                        menuUrl: "/order_management/machining_operations/costomer_Product_orders",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "close",funcName: "关闭"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                            {funcCode: "sumbit_product",funcName: "提交生产"},
                        ]
                    },
                    {
                        menuName: "代客分条订单",
                        menuCode:'valet_order',
                        menuIcon: "daikefentiaodingdan",
                        menuUrl: "/order_management/machining_operations/valet_order",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                            {funcCode: "sumbit_product",funcName: "提交生产"},
                        ]
                    }
                ]
            },
            {
                menuName: "其他业务",
                menuCode:'order_Modules_other',
                children: [
                    {
                        menuName: "借换单",
                        menuCode:'loan_order',
                        menuIcon: "jiehuanhuo",
                        menuUrl: "/order_management/other_operations/loan_order",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "change_enter",funcName: "换入"},
                            {funcCode: "change_outer",funcName: "换出"},
                            {funcCode: "close",funcName: "关闭"}
                        ]
                    },
                    {
                        menuName: "借换单-借入",
                        menuCode:'loan_order_enter',
                        menuIcon: "jiehuanhuo",
                        menuUrl: "/order_management/other_operations/loan_order_enter",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                        ]
                    },
                    {
                        menuName: "借换单-借出",
                        menuCode:'loan_order_outer',
                        menuIcon: "jiehuanhuo",
                        menuUrl: "/order_management/other_operations/loan_order_outer",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "sumbit_warehouse",funcName: "提交仓库"},
                        ]
                    }
                ]
            }
        ]
    },
    {
        menuName: "仓库管理",
        menuCode:"warehouse_management",
        menuUrl:"/warehouse_management/index",
        menuIcon:"cangkuguanli",
        children:[
            {
                menuName: "入库管理",
                menuCode:'warehouse_Modules_enter',
                children: [
                    {
                        menuName: "入库单",
                        menuCode:"enter_warehoue",
                        menuIcon: "caigourukudan",
                        menuUrl: "/warehouse_management/library_management/enter_warehoue",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "check",funcName: "核对"},
                            {funcCode: "sure_enter",funcName: "确认入库"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "print_enter",funcName: "打印入库单"},
                            {funcCode: "print_label",funcName: "打印标签"}
                        ]
                    },
                    {
                        menuName: "生产入库单",
                        menuCode:"production_enter_warehoue",
                        menuIcon: "shengchanrukudan",
                        menuUrl: "/warehouse_management/library_management/production_enter_warehoue",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "sure_enter",funcName: "确认入库"},
                            {funcCode: "print",funcName: "打印生产入库单"},
                            {funcCode: "revoke",funcName: "撤销"},
                        ]
                    },
                    {
                        menuName: "退货入库单",
                        menuCode:"return_goods_enter",
                        menuIcon: "xiaoshoutuihuodan",
                        menuUrl: "/warehouse_management/library_management/return_goods_enter",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "sure_enter",funcName: "确认入库"},
                            {funcCode: "print_return",funcName: "打印退货单"},
                        ]
                    },
                    {
                        menuName: "调拨入库",
                        menuCode:"allocation_enter_warehouse",
                        menuIcon: "tiaoboruku",
                        menuUrl: "/warehouse_management/library_management/allocation_enter_warehouse",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "sure_enter",funcName: "确认入库"},
                        ]
                    },
                    {
                        menuName: "其他入库单",
                        menuCode:"other_enter_warehouse",
                        menuIcon: "qitarukudan",
                        menuUrl: "/warehouse_management/library_management/other_enter_warehouse",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "check",funcName: "核对"},
                            {funcCode: "sure_enter",funcName: "确认入库"},
                        ]
                    }
                ]
            },
            {
                menuName: "出库管理",
                menuCode:'warehouse_Modules_outer',
                children: [
                    {
                        menuName: "待送货统计",
                        menuCode:"pending_delivery_statistics",
                        menuIcon: "daisonghuotongji",
                        menuUrl: "/warehouse_management/outgoing_management/pending_delivery_statistics",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "generate_deliver",funcName: "生成送货单"},
                            {funcCode: "add",funcName: "新增待送货"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "送货单",
                        menuCode:"deliver_goods",
                        menuIcon: "xiaoshousonghuodan",
                        menuUrl: "/warehouse_management/outgoing_management/deliver_goods",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "outer",funcName: "出库"},
                            {funcCode: "print",funcName: "打印送货单"}
                        ]
                    },
                    {
                        menuName: "送货签回单",
                        menuCode:"deliver_goods_back",
                        menuIcon: "songhuoqianhuidan",
                        menuUrl: "/warehouse_management/outgoing_management/deliver_goods_back",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "verify",funcName: "审核"},
                        ]

                    },
                    {
                        menuName: "生产领料单",
                        menuCode:"material_outgoing",
                        menuIcon: "yuancaichukudan",
                        menuUrl: "/warehouse_management/outgoing_management/material_outgoing",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "outer",funcName: "出库"},
                            {funcCode: "print",funcName: "打印领料单"},

                        ]
                    },
                    {
                        menuName: "退货出库单",
                        menuCode:"return_goods_outgoing",
                        menuIcon: "caigoutuihuodan",
                        menuUrl: "/warehouse_management/outgoing_management/return_goods_outgoing",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "check",funcName: "核对"},
                            {funcCode: "outer",funcName: "出库"},
                            {funcCode: "print",funcName: "打印退货单"}
                        ]
                    },
                    {
                        menuName: "调拨出库",
                        menuCode:"allocation_outgoing",
                        menuIcon: "tiaobochuku",
                        menuUrl: "/warehouse_management/outgoing_management/allocation_outgoing",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "outer",funcName: "出库"},
                        ]
                    },
                    {
                        menuName: "其它出库单",
                        menuCode:"other_outgoing",
                        menuIcon: "qitachukudan",
                        menuUrl: "/warehouse_management/outgoing_management/other_outgoing",
                        funcs: [
                            {funcCode: "look",funcName: "查看"}
                        ]
                    },
                    {
                        menuName: "辅料出库单",
                        menuCode:"accessories_outgoing",
                        menuIcon: "qitachukudan",
                        menuUrl: "/warehouse_management/outgoing_management/accessories_outgoing",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "outer",funcName: "出库"},
                        ]
                    }
                ]
            },
            {
                menuName: "库存查询",
                menuCode:'warehouse_Modules_inventorySearch',
                children: [
                    {
                        menuName: "库存明细查询",
                        menuCode:"inventory_detail",
                        menuIcon: "kucunmingxichaxun",
                        menuUrl: "/warehouse_management/inventory_query/inventory_detail",
                        funcs: []
                    },
                    {
                        menuName: "磅差明细查询",
                        menuCode:"inventory_differ",
                        menuIcon: "bangchamingxichaxun",
                        menuUrl: "/warehouse_management/inventory_query/inventory_differ",
                        funcs: []
                    },
                    {
                      menuName: "出入库流水账",
                      menuCode:" flow_bill",
                      menuIcon: "bangchamingxichaxun",
                      menuUrl: "/warehouse_management/inventory_query/flow_bill",
                      funcs: [
                        {funcCode: "export_excel",funcName: "导出excel"}
                      ]
                    }

                ]
            },
            {
                menuName: "库存调整",
                menuCode:'warehouse_Modules_inventoryAdjust',
                children: [
                    {
                        menuName: "目标客户调整",
                        menuCode:"target_custom",
                        menuIcon: "mubiaokehutiaozheng",
                        menuUrl: "/warehouse_management/inventory_adjustment/target_custom",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                        ]
                    },
                    {
                        menuName: "移区移位",
                        menuCode:"area_move",
                        menuIcon: "yiquyiwei",
                        menuUrl: "/warehouse_management/inventory_adjustment/area_move",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                        ]
                    },
                    {
                        menuName: "形态转换",
                        menuCode:"form_convert",
                        menuIcon: "xingtaizhuanhuan",
                        menuUrl: "/warehouse_management/inventory_adjustment/form_convert",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                        ]
                    },
                    {
                        menuName: "盘点调整",
                        menuCode:"inventory_adjust",
                        menuIcon: "pandiantiaozheng",
                        menuUrl: "/warehouse_management/inventory_adjustment/inventory_adjust",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                        ]
                    },
                    {
                        menuName: "质量调整",
                        menuCode:"quality_adjust",
                        menuIcon: "pandiantiaozheng",
                        menuUrl: "/warehouse_management/inventory_adjustment/quality_adjust",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "print",funcName: "打印"},
                        ]
                    }
                ]
            },
            {
                menuName: "品质管理",
                menuCode:'warehouse_Modules_quality',
                children: [
                    {
                        menuName: "入库质检单",
                        menuCode:"enter_warehouse_quality",
                        menuIcon: "rukuzhijiandan",
                        menuUrl: "/warehouse_management/quality_management/enter_warehouse_quality",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "quality_adjustment",funcName: "品质调整"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "check",funcName: "检查记录"}
                        ]
                    },
                    {
                        menuName: "出库质检单",
                        menuCode:"outer_warehouse_quality",
                        menuIcon: "rukuzhijiandan",
                        menuUrl: "/warehouse_management/quality_management/outer_warehouse_quality",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "delete",funcName: "删除"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        menuName: "生产管理",
        menuCode:"generation_management",
        menuUrl:"/generation_management/index",
        menuIcon:"shengchanguanli",
        children:[
            {
                menuName: "生产业务",
                menuCode:'generation_Modules_generation',
                children: [
                    {
                        menuName: "待生产销售明细",
                        menuCode:"product_sale_Detail",
                        menuIcon: "daishengchanxiaoshoumingxi",
                        menuUrl: "/generation_management/production_operations/product_sale_Detail",
                        funcs: [
                            {funcCode: "revoke",funcName: "撤销"}
                        ]
                    },
                    {
                        menuName: "生产指令单",
                        menuCode:"product_instructions",
                        menuIcon: "shengchanzhilingdan",
                        menuUrl: "/generation_management/production_operations/product_instructions",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "change",funcName: "变更"},
                            {funcCode: "begin_product",funcName: "开始生产"},
                            {funcCode: "isStop",funcName: "暂停/继续"},
                            {funcCode: "finish_num",funcName: "完工入数"},
                            {funcCode: "print",funcName: "打印领料单"}
                        ]
                    },
                    {
                      menuName: "生产指令单明细",
                      menuCode:"product_instructions_detail",
                      menuIcon: "shengchanzhilingdan",
                      menuUrl: "/generation_management/production_operations/product_instructions_detail",
                      funcs: [
                        {funcCode: "export_excel",funcName: "导出excel"},
                      ]
                    },
                    {
                      menuName: "生产排程",
                      menuCode:"product_scheduling",
                      menuIcon: "shengchanpaicheng",
                      menuUrl: "/generation_management/production_operations/product_scheduling",
                      funcs: [
                        {funcCode: "product_scheduling",funcName: "生产排程"},
                        {funcCode: "delete",funcName: "删除"}
                      ]
                    }
                ]
            }
        ]
    },
    {
        menuName: "价格设置",
        menuCode:"price_settings",
        menuUrl:"/price_settings/index",
        menuIcon:"jiage",
        children:[
            {
                menuName: "价格基础",
                menuCode:'price_Modules_priceSet',
                children: [
                    {
                        menuName: "现货价格查询",
                        menuCode:"spot_stock_price",
                        menuIcon: "xianhuojiagechaxun",
                        menuUrl: "/price_settings/price_baise/spot_stock_price",
                        funcs: [
                            {funcCode: "export_excel",funcName: "导出excel"},
                        ]
                    },
                    {
                        menuName: "采购价格金属成分",
                        menuCode:"purchase_price_metal",
                        menuIcon: "caigoujiagejinshuchengfen",
                        menuUrl: "/price_settings/price_baise/purchase_price_metal",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                        ]
                    },
                    {
                        menuName: "销售价格金属成分",
                        menuCode:"sale_price_metal",
                        menuIcon: "xiaoshoujiagejinshuchengfen",
                        menuUrl: "/price_settings/price_baise/sale_price_metal",
                        funcs: [
                            {funcCode: "modify",funcName: "修改"},
                        ]
                    }
                ]
            },
            {
                menuName: "采购价格",
                menuCode:'price_Modules_purchase',
                children: [
                    {
                        menuName: "供应商报价",
                        menuCode:"supplier_price",
                        menuIcon: "gongyingshangbaojia",
                        menuUrl: "/price_settings/purchase_price/supplier_price",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "submit_verify",funcName: "提交审核"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "export_excel",funcName: "导出excel"},
                        ]
                    },
                    {
                        menuName: "损耗系数(采购)",
                        menuIcon: "sunhaoxishu",
                        menuCode:"purchase_loss_coefficient",
                        menuUrl: "/price_settings/purchase_price/purchase_loss_coefficient",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "加工费设置(采购)",
                        menuIcon: "jiagongfeishezhi",
                        menuCode:"purchase_machining_price",
                        menuUrl: "/price_settings/purchase_price/purchase_machining_price",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "状态调整价设置(采购)",
                        menuCode:"purchase_status_adjust_set",
                        menuIcon: "zhuangtaitiaozhengjiageshezhi",
                        menuUrl: "/price_settings/purchase_price/purchase_status_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "厚度调整价设置(采购)",
                        menuCode:"purchase_thickness_adjuset_set",
                        menuIcon: "houdutiaozhengjiageshezhi",
                        menuUrl: "/price_settings/purchase_price/purchase_thickness_adjuset_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "宽度调整价设置(采购)",
                        menuCode:"purchase_width_adjust_set",
                        menuIcon: "kuandutiaozhengjiageshezhi",
                        menuUrl: "/price_settings/purchase_price/purchase_width_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "剪板调整价设置(采购)",
                        menuCode:"purchase_code_adjust_set",
                        menuIcon: "jianbantiaozhengjiashezhi",
                        menuUrl: "/price_settings/purchase_price/purchase_code_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "运输调整价设置(采购)",
                        menuCode:"purchase_tran_adjust_set",
                        menuIcon: "yunshutiaozhengjiashezhi",
                        menuUrl: "/price_settings/purchase_price/purchase_tran_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                ]
            },
            {
                menuName: "销售价格",
                menuCode:'price_Modules_sales',
                children: [
                    {
                        menuName: "损耗系数(销售)",
                        menuCode:"sales_loss_coefficient",
                        menuIcon: "sunhaoxishu",
                        menuUrl: "/price_settings/sale_price/sales_loss_coefficient",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "加工费设置(销售)",
                        menuCode:"sale_machining_price",
                        menuIcon: "jiagongfeishezhi",
                        menuUrl: "/price_settings/sale_price/sale_machining_price",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "状态调整价设置(销售)",
                        menuCode:"sale_status_adjust_set",
                        menuIcon: "zhuangtaitiaozhengjiageshezhi",
                        menuUrl: "/price_settings/sale_price/sale_status_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "厚度调整价设置(销售)",
                        menuCode:"sale_thickness_adjuset_set",
                        menuIcon: "houdutiaozhengjiageshezhi",
                        menuUrl: "/price_settings/sale_price/sale_thickness_adjuset_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "宽度调整价设置(销售)",
                        menuCode:"sale_width_adjust_set",
                        menuIcon: "kuandutiaozhengjiageshezhi",
                        menuUrl: "/price_settings/sale_price/sale_width_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "剪板调整价设置(销售)",
                        menuCode:"sale_code_adjust_set",
                        menuIcon: "jianbantiaozhengjiashezhi",
                        menuUrl: "/price_settings/sale_price/sale_code_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "运输调整价设置(销售)",
                        menuCode:"sale_tran_adjust_set",
                        menuIcon: "yunshutiaozhengjiashezhi",
                        menuUrl: "/price_settings/sale_price/sale_tran_adjust_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "产品用途费设置",
                        menuCode:"sale_product_use_set",
                        menuIcon: "chanpinyongtufeishezhi",
                        menuUrl: "/price_settings/sale_price/sale_product_use_set",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    }
                ]
            }
        ]
    },
    {
        menuName: "财务管理",
        menuCode:"financial_control",
        menuUrl:"/financial_control/index",
        menuIcon:"caiwuguanli",
        children:[
            {
                menuName: "结算单",
                menuCode:'financial_Modules_purchase',
                children: [
                    {
                        menuName: "采购结算单",
                        menuCode:'purchase_settle_accounts',
                        menuIcon: "caigoujiesuandan1",
                        menuUrl: "/financial_control/settle_account/purchase_settle_accounts",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "generate",funcName: "生成"},
                        ]
                    },
                    {
                      menuName: "采购结算单明细",
                      menuCode:'purchase_settle_accounts_detail',
                      menuIcon: "caigoujiesuandanmingxi",
                      menuUrl: "/financial_control/settle_account/purchase_settle_accounts_detail",
                      funcs: [
                        {funcCode: "export",funcName: "导出Excel"}
                      ]
                    },
                    {
                        menuName: "销售结算单",
                        menuCode:"sales_settle_accounts",
                        menuIcon: "xiaoshoujiesuandan",
                        menuUrl: "/financial_control/settle_account/sales_settle_accounts",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "adjust_price",funcName: "调整价格"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "generate",funcName: "生成"},
                        ]
                    },
                    {
                        menuName: "销售结算单明细",
                        menuCode:"sales_settle_accounts_detail",
                        menuIcon: "xiaoshoujiesuandanmingxi",
                        menuUrl: "/financial_control/settle_account/sales_settle_accounts_detail",
                        funcs: [
                          {funcCode: "export",funcName: "导出Excel"}
                        ]
                    },
                    {
                        menuName: "库存结算单",
                        menuCode:"stock_settle_accounts",
                        menuIcon: "kucunjiesuandan",
                        menuUrl: "/financial_control/settle_account/stock_settle_accounts",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "modify",funcName: "调整价格"},
                            {funcCode: "verify",funcName: "审核"},
                        ]
                    }
                ]
            },
            {
                menuName: "应收管理",
                menuCode:'financial_Modules_sales',
                children: [
                    {
                        menuName: "客户账户",
                        menuCode:'custom_accout',
                        menuIcon: "kehuzhanghu",
                        menuUrl: "/financial_control/should_collect/custom_accout",
                        funcs: [
                            {funcCode: "deposit_manage",funcName: "定金管理"},
                            {funcCode: "earnest_manage",funcName: "保证金管理"},
                            {funcCode: "oth_manage",funcName: "其他管理"}
                        ]
                    },
                    {
                        menuName: "客户会计期间",
                        menuCode:"accounting_period",
                        menuIcon: "huijiqijian",
                        menuUrl: "/financial_control/should_collect/accounting_period",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                        ]
                    },
                    {
                        menuName: "对账单",
                        menuCode:"reconciliation_order",
                        menuIcon: "duizhangdan",
                        menuUrl: "/financial_control/should_collect/reconciliation_order",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "export",funcName: "导出"},
                            {funcCode: "finish",funcName: "完成对账"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "货款匹配单(应收)",
                        menuCode:"loan_match_order",
                        menuIcon: "huokuanpipeidan",
                        menuUrl: "/financial_control/should_collect/loan_match_order",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "退货匹配单(应收)",
                        menuCode:"return_match_order",
                        menuIcon: "tuihuopipeidan",
                        menuUrl: "/financial_control/should_collect/return_match_order",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "收款单",
                        menuCode:"get_fund",
                        menuIcon: "shoukuandan",
                        menuUrl: "/financial_control/should_collect/get_fund",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "opposite_verify",funcName: "反审核"},
                            {funcCode: "sure_enter",funcName: "确认入账"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "客户退款单",
                        menuCode:"return_fund",
                        menuIcon: "tuikuandan",
                        menuUrl: "/financial_control/should_collect/return_fund",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    }
                ]
            },
            {
                menuName: "应付管理",
                menuCode:'should_pay',
                children: [
                  {
                    menuName: "供应商账号",
                    menuCode:"supplier_account",
                    menuIcon: "gongyingshangzhanghu",
                    menuUrl: "/financial_control/should_pay/supplier_account",
                    funcs: [
                      {funcCode: "deposit_management",funcName: "订金管理"},
                      {funcCode: "other_management",funcName: "其他管理"},
                    ]
                  },{
                    menuName: "供应商会计期间",
                    menuCode:"accounting_during",
                    menuIcon: "huijiqijian",
                    menuUrl: "/financial_control/should_pay/accounting_during",
                    funcs: [
                        {funcCode: "look",funcName: "查看"},
                    ]
                  },{

                      menuName: "货款匹配单(应付)",
                      menuCode:"loan_matching_list",
                      menuIcon: "huokuanpipeidan",
                      menuUrl: "/financial_control/should_pay/loan_matching_list",
                      funcs: [
                          {funcCode: "look",funcName: "查看"},
                          {funcCode: "add",funcName: "新增"},
                          {funcCode: "modify",funcName: "修改"},
                          {funcCode: "verify",funcName: "审核"},
                          {funcCode: "opposite_verify",funcName: "反审核"},
                          {funcCode: "delete",funcName: "删除"},
                      ]
                  },{
                      menuName: "退货匹配单(应付)",
                      menuCode:"return_match_list",
                      menuIcon: "tuihuopipeidan",
                      menuUrl: "/financial_control/should_pay/return_match_list",
                      funcs: [
                          {funcCode: "look",funcName: "查看"},
                          {funcCode: "add",funcName: "新增"},
                          {funcCode: "modify",funcName: "修改"},
                          {funcCode: "verify",funcName: "审核"},
                          {funcCode: "opposite_verify",funcName: "反审核"},
                          {funcCode: "delete",funcName: "删除"},
                      ]
                  },{
                      menuName: "付款单",
                      menuCode:"get_fund_list",
                      menuIcon: "fukuandan",
                      menuUrl: "/financial_control/should_pay/get_fund_list",
                      funcs: [
                          {funcCode: "look",funcName: "查看"},
                          {funcCode: "add",funcName: "新增"},
                          {funcCode: "modify",funcName: "修改"},
                          {funcCode: "verify",funcName: "审核"},
                          {funcCode: "opposite_verify",funcName: "反审核"},
                          {funcCode: "delete",funcName: "删除"},
                      ]
                  },{
                      menuName: "供应商退款单",
                      menuCode:"return_fund_list",
                      menuIcon: "tuikuandan",
                      menuUrl: "/financial_control/should_pay/return_fund_list",
                      funcs: [
                          {funcCode: "look",funcName: "查看"},
                          {funcCode: "add",funcName: "新增"},
                          {funcCode: "modify",funcName: "修改"},
                          {funcCode: "verify",funcName: "审核"},
                          {funcCode: "delete",funcName: "删除"},
                      ]
                  }

                ]
            },

            {
                menuName: "发票管理",
                menuCode:'financial_account1',
                children: [
                    {
                        menuName: "开票管理",
                        menuCode: "receipt_manage",
                        menuIcon: "kaipiaoguanli",
                        menuUrl: "/financial_control/receipt/receipt_manage",
                        funcs: [
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "verify",funcName: "审核"},
                            {funcCode: "cancellation",funcName: "作废"},
                            {funcCode: "delete",funcName: "删除"},
                        ]
                    },
                    {
                        menuName: "开票统计",
                        menuCode: "receipt_statistics",
                        menuIcon: "kaipiaotongji",
                        menuUrl: "/financial_control/receipt/receipt_statistics",
                        funcs: []
                    },
                    {
                        menuName: "开票明细",
                        menuCode: "receipt_detail",
                        menuIcon: "kaipiaomingxi",
                        menuUrl: "/financial_control/receipt/receipt_detail",
                        funcs: []
                    },{
                      menuName: "收票登记",
                      menuCode: "houdutiaozhengjiageshezhi",
                      menuIcon: "shoupiaodengji",
                      menuUrl: "/financial_control/receipt/collect_tickets_register",
                      funcs: [
                        {funcCode: "look",funcName: "查看"},
                        {funcCode: "add",funcName: "新增"},
                        {funcCode: "modify",funcName: "修改"},
                        {funcCode: "verify",funcName: "审核"},
                        {funcCode: "cancellation",funcName: "作废"},
                        {funcCode: "delete",funcName: "删除"},
                      ]
                    },{
                      menuName: "收票匹配单",
                      menuCode: "collect_tickets_matching",
                      menuIcon: "yunshutiaozhengjiashezhi",
                      menuUrl: "/financial_control/receipt/collect_tickets_matching",
                      funcs: [
                        {funcCode: "look",funcName: "查看"},
                        {funcCode: "add",funcName: "新增"},
                        {funcCode: "modify",funcName: "修改"},
                        {funcCode: "verify",funcName: "审核"},
                        {funcCode: "delete",funcName: "删除"},
                      ]
                    }
                ]
            },
            {
              menuName: "其他管理",
              menuCode: "otheradmin",
              children: [
                  {
                    menuName: "月关账",
                    menuCode: "financial_account",
                    menuIcon: "icon-duizhangdan",
                    menuUrl: "/financial_control/financial_account/financial_account",
                    funcs:[
                      {funcCode: "save",funcName: "保存"},
                    ]
                  }
              ]
            }
        ]
    },
    {
        menuName: "报表管理",
        menuCode:"report_management",
        menuUrl:"/report_management/index",
        menuIcon:"baobiaoguanli",
        children:[
          {
            menuName: "采购报表",
            menuCode:'purchase_report',
            children:[
              {
                menuName: "采购入库明细",
                menuCode:"purchase_details",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/purchase_report/purchase_details",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]

              }
            ]
          },
          {
            menuName: "销售报表",
            menuCode:'sales_report',
            children:[
              {
                menuName: "销售订单执行明细表",
                menuCode:"sales_order_execution_schedule",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/sales_order_execution_schedule",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]

              },
              {
                menuName: "发货明细",
                menuCode:"delivery_details",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/delivery_details",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                // menuName: "客户利润及投资回报情况",
                menuName: "客户利润分析表",
                menuCode:"customer_profit_and_return_on_investment",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/customer_profit_and_return_on_investment",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                menuName: "客户资金风险控制表",
                menuCode:"customer_risk_control",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/customer_risk_control",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
            ]
          },
          {
            menuName: "仓库报表",
            menuCode:'warehouse_report',
            children:[
              {
                menuName: "库存日报",
                menuCode:"inventory_daily",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/warehouse_report/inventory_daily",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]

              },
              {
                menuName: "实时库存表",
                menuCode:"real_time_inventory_table",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/warehouse_report/real_time_inventory_table",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]

              },
              {
                menuName: "代客分条明细",
                menuCode:"valet_detail",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/warehouse_report/valet_detail",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                menuName: "生产入库明细",
                menuCode:"production_enter_warehoue_detail",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/warehouse_report/production_enter_warehoue_detail",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]

              }
            ]
          },
          {
            menuName: "生产报表",
            menuCode:'generation_report',
            children:[
              {
                menuName: "生产日报表",
                menuCode:"generation_diary",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/generation_report/generation_diary",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },

            ]
          },
          {
            menuName: "财务报表",
            menuCode:'financial_report',
            children:[
              {
                menuName: "每月库存利息汇总表",
                menuCode:"month_stock_interest",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/month_stock_interest",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                menuName: "每月应收利息汇总表",
                menuCode:"month_collect_interest",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/month_collect_interest",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                menuName: "应收账款汇总表",
                menuCode:"collect_credit",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/collect_credit",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              },
              {
                menuName: "应收账款明细表",
                menuCode:"collect_credit_detail",
                menuIcon: "gongsixinxi",
                menuUrl: "/report_management/sales_report/collect_credit_detail",
                funcs: [
                    {funcCode: "export_excel",funcName: "导出excel"},
                ]
              }
            ]
          }
        ]
    },
    {
        menuName: "系统管理",
        menuCode:"access_management",
        menuUrl:"/access_management/index",
        menuIcon:"quanxianguanli",
        children:[
            {
                menuName: "组织架构管理",
                menuCode:'access_Modules_organization',
                children: [
                    {
                        menuName: "公司信息",
                        menuCode:"company_information",
                        menuIcon: "gongsixinxi",
                        menuUrl: "/access_management/organizational_structure_management/company_information",
                        funcs: [
                            {funcCode: "add",funcName: "新增公司"},
                            {funcCode: "add_children",funcName: "新增子公司"},
                            {funcCode: "modify",funcName: "修改公司"},
                            {funcCode: "delete",funcName: "删除公司"},
                            {funcCode: "synchronization",funcName: "同步OA组织"},
                        ]
                    },
                    {
                        menuName: "区域管理",
                        menuCode:"area_management",
                        menuIcon: "quyuguanli",
                        menuUrl: "/access_management/organizational_structure_management/area_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增区域"},
                            {funcCode: "add_children",funcName: "新增子区域"},
                            {funcCode: "modify",funcName: "修改区域"},
                            {funcCode: "delete",funcName: "删除区域"}
                        ]
                    },
                    {
                        menuName: "部门管理",
                        menuCode:"department_management",
                        menuIcon: "bumenguanli",
                        menuUrl: "/access_management/organizational_structure_management/department_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增部门"},
                            {funcCode: "add_children",funcName: "新增子部门"},
                            {funcCode: "modify",funcName: "修改部门"},
                            {funcCode: "delete",funcName: "删除部门"}
                        ]
                    },
                    {
                        menuName: "岗位管理",
                        menuCode:"post_management",
                        menuIcon: "gangweiguanli",
                        menuUrl: "/access_management/organizational_structure_management/post_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增岗位"},
                            {funcCode: "modify",funcName: "修改岗位"},
                            {funcCode: "delete",funcName: "删除岗位"}
                        ]
                    },
                    {
                        menuName: "员工管理",
                        menuCode:"staff_management",
                        menuIcon: "yuangongguanli",
                        menuUrl: "/access_management/organizational_structure_management/staff_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增员工"},
                            {funcCode: "modify",funcName: "修改员工"},
                            {funcCode: "delete",funcName: "删除员工"}
                        ]
                    }
                ]
            },
            {
                menuName: "用户及权限管理",
                menuCode:'access_Modules_userAccess',
                children: [
                    {
                        menuName: "菜单管理",
                        menuCode: "menu_management",
                        menuIcon: "caidanguanli",
                        menuUrl: "/access_management/user_authority_management/menu_management",
                        funcs: []
                    },
                    {
                        menuName: "账号管理",
                        menuCode:"account_management",
                        menuIcon: "zhanghaoguanli",
                        menuUrl: "/access_management/user_authority_management/account_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增账号"},
                            {funcCode: "modify",funcName: "修改账号"},
                            {funcCode: "delete",funcName: "删除账号"},
                            {funcCode: "reset_password",funcName: "重置密码"},
                            {funcCode: "install_role",funcName: "设置角色"},
                            {funcCode: "install_authority",funcName: "设置权限"},
                            {funcCode: "install_data_authority_grouping",funcName: "设置数据权限分组"},
                            {funcCode: "install_data_authority",funcName: "设置数据权限"},
                        ]
                    },
                    {
                        menuName: "角色管理",
                        menuCode:"role_management",
                        menuIcon: "jiaoseguanli",
                        menuUrl: "/access_management/user_authority_management/role_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增目录"},
                            {funcCode: "add_children",funcName: "新增子目录"},
                            {funcCode: "modify",funcName: "修改目录"},
                            {funcCode: "delete",funcName: "删除目录"},
                            {funcCode: "add_role",funcName: "添加角色"},
                            {funcCode: "modify_role",funcName: "修改角色"},
                            {funcCode: "delete_role",funcName: "删除角色"},
                            {funcCode: "add_authority",funcName: "添加权限"},
                            {funcCode: "delete_authority",funcName: "删除权限"},
                        ]
                    },
                    {
                        menuName: "权限管理",
                        menuCode:"authority_management",
                        menuIcon: "quanxianguanli",
                        menuUrl: "/access_management/user_authority_management/authority_management",
                        funcs: []
                    },
                    {
                        menuName: "权限数据分组",
                        menuCode:"authority_data",
                        menuIcon: "quanxianshujufenzu",
                        menuUrl: "/access_management/user_authority_management/authority_data",
                        funcs: [
                            {funcCode: "add",funcName: "新增分组"},
                            {funcCode: "modify",funcName: "修改分组"},
                            {funcCode: "delete",funcName: "删除分组"},
                            {funcCode: "add_example",funcName: "添加实例"},
                            {funcCode: "delete_example",funcName: "删除实例"}
                        ]
                    },
                    {
                        menuName: "数据权限管理",
                        menuCode:"data_authority_management",
                        menuIcon: "shujuquanxianguanli",
                        menuUrl: "/access_management/user_authority_management/data_authority_management",
                        funcs: [
                            {funcCode: "add",funcName: "新增数据权限"},
                            {funcCode: "modify",funcName: "修改数据权限"},
                            {funcCode: "delete",funcName: "删除数据权限"},
                            {funcCode: "add_example",funcName: "添加实例"},
                            {funcCode: "delete_example",funcName: "删除实例"},
                            {funcCode: "add_data",funcName: "添加数据"},
                            {funcCode: "delete_data",funcName: "删除数据"}
                        ]
                    }
                ]
            },
            {
                menuName: "参数配置",
                menuCode:'access_Modules_params',
                children: [
                    {
                        menuName: "编码生成规则",
                        menuCode:"coding_rule",
                        menuIcon: "bianmashengchengguize",
                        menuUrl: "/access_management/parameter_settings/coding_rule",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    },
                    {
                        menuName: "参数配置",
                        menuCode:"parameter_settings",
                        menuIcon: "canshupeizhi",
                        menuUrl: "/access_management/parameter_settings/parameter_settings",
                        funcs: [
                            {funcCode: "add",funcName: "新增"},
                            {funcCode: "modify",funcName: "修改"},
                            {funcCode: "look",funcName: "查看"},
                            {funcCode: "delete",funcName: "删除"},
                            {funcCode: "isEffect_Y",funcName: "生效"},
                            {funcCode: "isEffect_N",funcName: "失效"}
                        ]
                    }
                ]
            },

            {
                menuName: "外部账号管理",
                menuCode:'access_Modules_otherUsers',
                children: [
                    {
                        menuName: "账号管理",
                        menuCode: "outer_account",
                        menuIcon: "zhanghaoguanli",
                        menuUrl: "/access_management/outer_account/outer_account",
                        funcs: [
                            {funcCode: "add_acount",funcName: "绑定账号"},
                            {funcCode: "delete_acount",funcName: "解绑账号"}
                        ]
                    },{
                      menuName: "修改密码",
                      menuCode: "change_password",
                      menuIcon: "zhanghaoguanli",
                      menuUrl: "/access_management/outer_account/change_password",
                      funcs: [
                          {funcCode: "save",funcName: "保存"},
                      ]
                    }
                ]
            }
        ]
    }
]
