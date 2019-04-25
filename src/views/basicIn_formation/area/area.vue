<template>
    <div class="mainContent" 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.4)"
    >

        <!-- 按钮工具栏 begin -->
        <div class="toolBoxWrap">
          <div class="toolBox">

            <div class="toolBox_fixed_right">
                <div class="pageBox">
                  <button class="w-button" @click="toggleshowPagination()">分页跳转</button>
                  <transition name="fade">
                      <div class="pageBox-container" v-if="showPagination">
                        <el-pagination
                            @current-change="currentChange"
                            :current-page.sync="currentPage"
                            :page-size="page_size"
                            small
                            layout="prev, next, slot, jumper"
                            :total="total_number">
                            <span class="page-number">第{{currentPage}} / {{totalPage}}页</span>
                        </el-pagination>
                      </div>
                  </transition>
                </div>
                <button class="w-button primary" @click="openCheck">
                    <i class="el-icon-search"></i>
                    <span>查询</span>
                </button>
            </div>

          </div>
        </div>
        <!-- 按钮工具栏 end -->
        
        <div style="height:100%">
          <!-- <hkm-table 
            :records="records"
            :body-contextmenu="['copy', 'freeze_row', 'unfreeze_row']">
            <hkm-table-column
              v-for="(c, i) in columns"
              :key="i"
              :label="c.label"
              :type="c.type"
              :width="c.width"
              :fixed="c.fixed"
              :prop="c.prop"
              :sortable="c.sortable"
              :resizable="c.resizable"
              :editable="c.editable">
            </hkm-table-column>
          </hkm-table> -->
        </div>

        <side-bar @searchAreaList="searchAreaListLink" ref="sidebar"></side-bar>
    </div>
</template>

<script>
import SideBar from './sideBar'

export default {
  name:'area_list',
  components:{
    SideBar,
  },
  data(){
    return {

      // load加载
      loading: false,

      // 展示分页
      showPagination:false,

      // 当前页
      currentPage:1,

      // 每页条数
      page_size: 20,

      // 总条数
      total_number: 0,

      // 总页数
      totalPage:0,

      // 当前省
      current_province: "",

      // 当前城市
      current_city: "",

      // 当前区
      current_district: "",

      // 当前街道
      current_street: "",

      // 表头信息
      columns: [
        {
          label: "省名称",
          prop: "provice",
        },
        {
          label: "市名称",
          prop: "land",
        },
        {
          label: "区名称",
          prop: "district",
        },
        {
          label: "乡镇街道名称",
          prop: "town",
        }
      ],

      // 表格数据
      records: []
    }
  },

  created(){
    // this.loadData("","","","",1,this.page_size);
  },

  methods:{

    // 加载列表数据
    loadData(province,city,district,street,page,rows) {
      this.loading = true;
      this.$http({
        url:'/crs/division/baseDivision/queryPage.do',
        method:'post',
        data:{
          page: page,
          rows: rows,
          proviceCode: province,
          landCode: city,
          districtCode: district,
          townCode: street,
        }
      }).then((res)=>{
        if (res.data && res.data.istrue) {
          this.records = [];
          this.records = res.data.data.rows;
          this.total_number = res.data.data.total;
          this.totalPage = Math.ceil(res.data.data.total / this.page_size);
        }
        this.loading = false;
      })
    },

    // 搜索点击查询监听事件
    searchAreaListLink(msg) {
      this.currentPage = 1;
      this.current_province = msg.province;
      this.current_city = msg.city;
      this.current_district = msg.district;
      this.current_street = msg.street;
      this.loadData(msg.province,msg.city,msg.district,msg.street,1,this.page_size);
    },

    // 当前页改变
    currentChange(val){
      this.currentPage = val;
      this.loadData(this.current_province,this.current_city,this.current_district,this.current_street,val,this.page_size);
    },

    // 点击切换分页显示
    toggleshowPagination(){
      this.showPagination = !this.showPagination;
    },

  	// 打开搜索栏
    openCheck(){
      this.$refs.sidebar.openSideBar();
    }

  }
}
</script>

<style scoped>
</style>
