<template>
	<!-- 模拟键盘 -->
	<div class="Keyboard_box" 
		 v-drag
		 :style="{ left: invData.left + 'px', top: invData.top + 'px' }">
		<a href="javascript:void(0)" class="drag_close" @click="KeyboardClose"><span class="iconfont icon-guanbi"></span></a>
		<ul class="Keyboard_box_inn">
			<li 
			v-for="(item,index) in Keyboard_box_list"
			:key="index"
			@click="KeyboardLink(item)"
			>{{item}}</li>
		</ul>
	</div>
</template>

<script>

export default {
  name:'KeyboardBox',
  props: ['invData'],
  data() {
    return {
      // 模拟键盘按键
	  Keyboard_box_list: ["±",">","1","2","3","+","≥","4","5","6","-","<","7","8","9","/","≤","删除","0","."],
    }
  },
  created(){
  },
  methods: {
  	KeyboardLink(val){
  		this.$emit('keyboardMsg',{isClose: true,data: val});
  	},
  	KeyboardClose(){
  		this.$emit('keyboardMsg',{isClose: false,data: {}});
  	}
  }
};
</script>

<style>
/* 虚拟键盘样式 begin */
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

.Keyboard_box {
	position: fixed;
    left: 0;
    top: 0;
    width: 260px;
    height: 190px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.20);
	border-radius: 4px;
    z-index: 9999;
    cursor:move;
}

.Keyboard_box_inn {
	padding: 15px;
	font-size: 0;
}

.Keyboard_box_inn > li {
	display: inline-block;
	width: 36px;
	height: 30px;
	margin: 5px;
	text-align: center;
	background: #F7F8F9;
	border: 1px solid #D9E2E9;
    box-sizing: border-box;
	line-height: 30px;
	font-size: 16px;
	color: #252525;
	cursor: pointer;
}

.Keyboard_box_inn > li:nth-last-child(3){
	font-size: 12px;
}

.Keyboard_box_inn > li:hover{
	background: #9FC4FD;
	border: 1px solid #0064FF;
}

/* 虚拟键盘样式 end */
</style>