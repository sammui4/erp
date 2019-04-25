<template>
<side-bar-comp :visible.sync="visible" innerWidth="300px">
  <template slot="body">
     <el-form
        label-position="right"
        label-width="100px"
        :model="formInline"
        ref="searchForm">

        <el-form-item label="省">
            <el-select v-model="formInline.province" @change="province_change" placeholder="请选择省">
              <el-option
                v-for="item in province_list"
                :key="item.proviceCode"
                :label="item.provice"
                :value="item.proviceCode">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="市">
            <el-select v-model="formInline.city" @change="city_change" placeholder="请选择市">
              <el-option
                v-for="item in city_list"
                :key="item.landCode"
                :label="item.land"
                :value="item.landCode">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="区县">
            <el-select v-model="formInline.district" @change="district_change" placeholder="请选择区县">
              <el-option
                v-for="item in district_list"
                :key="item.districtCode"
                :label="item.district"
                :value="item.districtCode">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="乡镇街道">
          <el-select v-model="formInline.street" placeholder="请选择乡镇街道">
            <el-option
              v-for="item in street_list"
              :key="item.townCode"
              :label="item.town"
              :value="item.townCode">
            </el-option>
          </el-select>
        </el-form-item>
        <div style="display:none">
            <button class="w-button primary" ref="searchBarCheck" @click="submitForm('searchForm')">查询</button>
            <button class="w-button primary" ref="searchBarReset" @click="resetForm('searchForm')">重置</button>
        </div>
      </el-form>
  </template>
  <template slot="footer">
     <button class="w-button primary" @click="checkClick">查询</button>
  </template>
</side-bar-comp>

</template>

<script>
import SideBarComp from '@/components/sideBar/sideBar.vue'

export default {
  name:'area_sideBar',
  data() {
    return {
      visible:false,
      province_list: [],
      city_list: [],
      district_list: [],
      street_list: [],
      formInline: {
        province: "",
        city: "",
        district: "",
        street: ""
      }
    }
  },
  components:{
    SideBarComp
  },
  created(){
    this.load_provice();
  },
  methods: {

    // 加载省列表数据
    load_provice() {
      this.$http({
        url:'/crs/division/baseDivision/selectDivisionProvice.do',
        method:'post',
        data:{
          baseDivision: "",
        }
      }).then((res)=>{
        if (res.data && res.data.istrue) {
          this.province_list = [];
          this.province_list = res.data.data;
        }
      })
    },

    // 加载市列表数据
    load_city(id) {
      this.$http({
        url:'/crs/division/baseDivision/selectDivisionLand.do',
        method:'post',
        data:{
          baseDivision: {
            proviceCode: id
          },
        }
      }).then((res)=>{
        if (res.data && res.data.istrue) {
          this.city_list = [];
          this.city_list = res.data.data;
        }
      })
    },

    // 加载区列表数据
    load_district(id) {
      this.$http({
        url:'/crs/division/baseDivision/selectDivision.do',
        method:'post',
        data:{
          baseDivision: {
            landCode: id
          },
        }
      }).then((res)=>{
        if (res.data && res.data.istrue) {
          this.district_list = [];
          this.district_list = res.data.data;
        }
      })
    },

    // 加载街道列表数据
    load_street(id) {
      this.$http({
        url:'/crs/division/baseDivision/selectDivisionTown.do',
        method:'post',
        data:{
          baseDivision: {
            districtCode: id
          },
        }
      }).then((res)=>{
        if (res.data && res.data.istrue) {
          this.street_list = [];
          this.street_list = res.data.data;
        }
      })
    },

    // 省下拉改变
    province_change() {
      this.load_city(this.formInline.province);
      this.formInline.city = "";
      this.formInline.district = "";
      this.formInline.street = "";
      this.city_list = [];
      this.district_list = [];
      this.street_list = [];
    },

    // 市下拉改变
    city_change() {
      this.load_district(this.formInline.city);
      this.formInline.district = "";
      this.formInline.street = "";
      this.district_list = [];
      this.street_list = [];
    },

    // 区下拉改变
    district_change() {
      this.load_street(this.formInline.district);
      this.street_list = [];
      this.formInline.street = "";
    },

    // 打开搜索框
    openSideBar() {
      this.visible = true;
    },

    // 关闭搜索框
    closeSideBar() {
      this.visible = false;
    },

    // 点击查询传递数据
    checkClick() {
      this.$emit('searchAreaList',this.formInline);
    }
  }
};
</script>

<style>
</style>
