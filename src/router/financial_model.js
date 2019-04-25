// 财务管理模块

export default [
	// {
  //       name: "财务管理",
  //       path:'financial_control/index',
  //       component: () => import('@/views/financial_control/index'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name:'月关账',
  //       path:'financial_control/financial_account/financial_account',
  //       component: () => import('@/views/financial_control/financial_account/financial_account'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "采购结算单",
  //       path:'financial_control/settle_account/purchase_settle_accounts',
  //       component: () => import('@/views/financial_control/settle_account/purchase_settle_accounts'),
  //       meta: {requireAuth: true}
  //   },
  //   {
	// 	name: "采购结算单明细",
	// 	path:'financial_control/settle_account/purchase_settle_accounts_detail',
	// 	component: () => import('@/views/financial_control/settle_account/purchase_settle_accounts_detail'),
	// 	meta: {requireAuth: true}
  //   },
  //   {
  //       name: "销售结算单",
  //       path:'financial_control/settle_account/sales_settle_accounts',
  //       component: () => import('@/views/financial_control/settle_account/sales_settle_accounts'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "销售结算单明细",
  //       path:'financial_control/settle_account/sales_settle_accounts_detail',
  //       component: () => import('@/views/financial_control/settle_account/sales_settle_accounts_detail'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "库存结算单",
  //       path:'financial_control/settle_account/stock_settle_accounts',
  //       component: () => import('@/views/financial_control/settle_account/stock_settle_accounts'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "客户账号",
  //       path:'financial_control/should_collect/custom_accout',
  //       component: () => import('@/views/financial_control/should_collect/custom_accout'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "客户会计期间",
  //       path:'financial_control/should_collect/accounting_period',
  //       component: () => import('@/views/financial_control/should_collect/accounting_period'),
  //       meta: {requireAuth: true}
  //   },
  //   {
  //       name: "对账单",
  //       path: 'financial_control/should_collect/reconciliation_order',
  //       component: () => import('@/views/financial_control/should_collect/reconciliation_order'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "贷款匹配单(应收)",
  //       path: 'financial_control/should_collect/loan_match_order',
  //       component: () => import('@/views/financial_control/should_collect/loan_match_order'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "退货匹配单(应收)",
  //       path: 'financial_control/should_collect/return_match_order',
  //       component: () => import('@/views/financial_control/should_collect/return_match_order'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "收款单",
  //       path: 'financial_control/should_collect/get_fund',
  //       component: () => import('@/views/financial_control/should_collect/get_fund'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "客户退款单",
  //       path: 'financial_control/should_collect/return_fund',
  //       component: () => import('@/views/financial_control/should_collect/return_fund'),
  //       meta: { requireAuth: true }
  //   },

  //   {
	// 	name: "供应商账号",
	// 	path: 'financial_control/should_pay/supplier_account',
	// 	component: () => import('@/views/financial_control/should_pay/supplier_account'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "供应商会计期间",
	// 	path: 'financial_control/should_pay/accounting_during',
	// 	component: () => import('@/views/financial_control/should_pay/accounting_during'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "贷款匹配单(应付)",
	// 	path: 'financial_control/should_pay/loan_matching_list',
	// 	component: () => import('@/views/financial_control/should_pay/loan_matching_list'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "退货匹配单(应付)",
	// 	path: 'financial_control/should_pay/return_match_list',
	// 	component: () => import('@/views/financial_control/should_pay/return_match_list'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "付款单",
	// 	path: 'financial_control/should_pay/get_fund_list',
	// 	component: () => import('@/views/financial_control/should_pay/get_fund_list'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "供应商退款单",
	// 	path: 'financial_control/should_pay/return_fund_list',
	// 	component: () => import('@/views/financial_control/should_pay/return_fund_list'),
	// 	meta: { requireAuth: true }
  //   },

  //   {
  //       name: "开票管理",
  //       path: 'financial_control/receipt/receipt_manage',
  //       component: () => import('@/views/financial_control/receipt/receipt_manage'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "开票统计",
  //       path: 'financial_control/receipt/receipt_statistics',
  //       component: () => import('@/views/financial_control/receipt/receipt_statistics'),
  //       meta: { requireAuth: true }
  //   },
  //   {
  //       name: "开票明细",
  //       path: 'financial_control/receipt/receipt_detail',
  //       component: () => import('@/views/financial_control/receipt/receipt_detail'),
  //       meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "收票登记",
	// 	path: 'financial_control/receipt/collect_tickets_register',
	// 	component: () => import('@/views/financial_control/receipt/collect_tickets_register'),
	// 	meta: { requireAuth: true }
  //   },
  //   {
	// 	name: "收票匹配单",
	// 	path: 'financial_control/receipt/collect_tickets_matching',
	// 	component: () => import('@/views/financial_control/receipt/collect_tickets_matching'),
	// 	meta: { requireAuth: true }
  //   },
]