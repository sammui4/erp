<template>
    <!-- v-drag  -->
	<div class="drag_box"
		 v-drag
		 :style="{ left: invData.left + 'px', top: invData.top + 'px' }"
		 >
		<div class="drag_box_inn">
			<a href="javascript:void(0)" class="drag_close" @click="drag_close"><span class="iconfont icon-guanbi"></span></a>
			<ul class="inventory_search">
				<li style="width:82px;">
					<span>存货名称</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_chmc" ref="dragMsg_chmc" v-wfocus>
				</li>
				<li style="width:44px;">
					<span>状态</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_status">
				</li>
				<li style="width:42px;">
					<span>厚度</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_hd">
				</li>
				<li style="width:42px;">
					<span>宽度</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_kd">
				</li>
				<li style="width:42px;">
					<span>长度</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_cd">
				</li>
				<li style="width:157px;">
					<span>存货编码</span>
					<input type="text" @keyup="invDataLink" v-model="invDataList.dragMsg_chbm">
				</li>
			</ul>

			<ul class="inventory_search_list">
				<li v-for="(item,index) in inventory_search_list" :key="index" @click="inventory_add(item)">
					<span style="width:82px;">{{item.inventoryName}}</span>
					<span style="width:44px;">{{item.stateName}}</span>
					<span style="width:126px;">{{item.thickness}}*{{item.width}}*{{item.length}}</span>
					<span style="width:44px;">{{item.inventoryCode}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['invData','brand'],
	data() {
		return {
			//
			dragLeft: 0,

			//
			dragTop: 0,

			// 存货名称搜索列表
			inventory_search_list: [],

			// 存货名称搜索内容
			invDataList: {
				dragMSG_brandId: this.brand,
				dragMsg_chmc: '',
				dragMsg_status: '',
				dragMsg_hd: '',
				dragMsg_kd: '',
				dragMsg_cd: '',
				dragMsg_chbm: '',
			},
		}
	},
	created(){
  },
  directives:{
    wfocus:{
      inserted(el){
        el.focus()
      }
    }
  },
	methods:{

	    // 选中当前数据
		inventory_add(item){
			this.$emit('isinvDataClose',{isClose: false,data: item});
		},

	    // 存货名称模糊搜索事件
	    invDataLink(){
	    	if (this.invDataList.dragMsg_chbm == ''  &&
				this.invDataList.dragMsg_chmc == '' &&
				this.invDataList.dragMsg_cd == '' &&
				this.invDataList.dragMsg_status == '' &&
				this.invDataList.dragMsg_hd == '' &&
				this.invDataList.dragMsg_kd == ''
				) {
				return;
			}
			this.$http({
				url:'/crs/inventorymanager/bsInventoryInformation/queryinventoryInfo.do',
				method:'post',
				data:{
					brandId: this.invDataList.dragMSG_brandId,
					inventoryCode: this.invDataList.dragMsg_chbm,
					inventoryName: this.invDataList.dragMsg_chmc,
					length: this.invDataList.dragMsg_cd,
					stateName: this.invDataList.dragMsg_status,
					thickness: this.invDataList.dragMsg_hd,
					width: this.invDataList.dragMsg_kd,
				}
			}).then((res)=>{
				if (res.data && res.data.istrue) {
				  // console.log(res)
				  this.inventory_search_list = []
				  this.inventory_search_list = res.data.data;
				}
			})
		},

		drag_close(){
			this.$emit('isinvDataClose',{isClose: false,data: {}});
		}

	}
};
</script>

<style scoped>
/* 存货搜索框样式 begin */
.drag_box{
	position: fixed;
    left: 0;
    top: 0;
    width: 410px;
    max-height: 282px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.20);
	border-radius: 4px;
    z-index: 9999;
    cursor:move;
}

.drag_close {
	position: absolute;
    right: -7px;
    top: -7px;
    color: #555;
}

.drag_close > span {
	color: #afafaf;
}

.drag_close > span:hover {
	color: #555;
}

.inventory_search {
	font-size: 0;
}

.inventory_search > li {
	display: inline-block;
	padding: 4px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.inventory_search > li:last-child {
	border-right: 0;
}

.inventory_search > li > span {
	display: block;
	padding: 3px 0;
	margin-bottom: 4px;
	text-align: center;
	font-size: 12px;
	color: #333;
}
.inventory_search > li > input{
	font-size: 12px;
	background: #F7F8F9;
	border: 1px solid #D9E2E9;
	color: #333;
	width: 100%;
	box-sizing: border-box;
}

.inventory_search_list {
	font-size: 0;
	overflow: auto;
	max-height: 200px;
}

.inventory_search_list > li {
	display: block;
	font-size: 0;
	cursor: pointer;
}

.inventory_search_list > li:hover {
	background-color: #D8E8FC
}

.inventory_search_list > li > span{
	display: inline-block;
	box-sizing: border-box;
	border-right: 1px solid #D9E2E9;
	padding: 4px 5px;
	font-size: 12px;
	color: #333;
}

.inventory_search_list > li > span:last-child {
	border-right: 0px;
}
/* 存货搜索框样式 end */
</style>
