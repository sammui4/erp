<template>
  <div>
    <div :class="visible===true?'search-bar-w active':'search-bar-w'">
      <div class="search-bar-outer" @click="closeSideBar()"></div>
      <div class="search-bar-inner" :style="{width:innerWidth}">
        <div class="search-bar-title">
          <span>搜索条件</span>
          <span class="special">search</span>
          <i class="iconfont icon-shenpibutongguo" id="close" @click="closeSideBar"></i>
        </div>
        <div class="search-bar-form scrollbar">
          <slot name="body"></slot>
        </div>
        <div class="search-bar-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    innerWidth:{
      type:String,
      default: '300px'
    }

  },
  methods:{
    openSideBar() {
      this.$emit('update:visible', true);
    },
    closeSideBar() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
