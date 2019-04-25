// import axios from '@/utils/fetch.js'
export default {
  computed:{
    province:{
      get(){
        return this.formInline.province
      },
      set(){

      }
    },
    city:{
      get(){
        return this.formInline.city
      },
      set(){

      }
    },
    district:{
      get(){
        return this.formInline.district
      },
      set(){

      }
    },
    townstreet:{
      get(){
        return this.formInline.townstreet
      },
      set(){

      }
    },
  },

  data(){
    return {
      provinceList:[],
      cityList:[],
      cityLoading:false,
      districtList:[],
      districtLoading:false,
      townstreetList:[],
      townstreetLoading:false,
    }

  },
  methods:{
    cityGet(newVal,boolean) {
      if(!boolean){
        this.formInline.city = ''
        this.cityList = [];
        this.formInline.district = ''
        this.districtList = [];
        this.formInline.townstreet = ''
        this.townstreetList = [];

      }
      var array =  this.provinceList.filter((val)=>{
          return val.provice===newVal
      })
      if(array.length<1){
        return
      }
      return this.$http({
        method:'post',
        url:'/crs/division/baseDivision/selectDivisionLand.do',
        data:{
          baseDivision:{
            proviceCode:array[0].proviceCode
          }
        }
      }).then((res)=>{
        if(res.data.istrue){
          this.cityList = res.data.data;
        }
      })
    },
    districtGet(newVal,boolean) {
      if(!boolean){
        this.formInline.district = ''
        this.districtList = [];
        this.formInline.townstreet = ''
        this.townstreetList = [];
      }
      var array =  this.cityList.filter((val)=>{
        return val.land===newVal
      })
      if(array.length<1){
        return
      }
      return this.$http({
        method:'post',
        url:'/crs/division/baseDivision/selectDivision.do',
        data:{
          baseDivision:{
            landCode:array[0].landCode
          }
        }
      }).then((res)=>{
        if(res.data.istrue){
          this.districtList = res.data.data;
        }
      })
    },
    townstreetGet(newVal,boolean) {
      if(!boolean){
        this.formInline.townstreet = ''
        this.townstreetList = [];
      }
      var array =  this.districtList.filter((val)=>{
        return val.district===newVal
      })
      if(array.length<1){
        return
      }
      return this.$http({
        method:'post',
        url:'/crs/division/baseDivision/selectDivisionTown.do',
        data:{
          baseDivision:{
            districtCode:array[0].districtCode
          }
        }
      }).then((res)=>{
        if(res.data.istrue){
          this.townstreetList = res.data.data;
        }
      })
    },

  },
  watch:{
    //省监听
    province(newVal,oldValue){
      //

        // if(newVal===''){

        // }
      // }else{

        // var array =  this.provinceList.filter((val)=>{

        //   return val.provice===newVal
        // })
        // //请求city
        // this.cityGet(array[0].proviceCode);
      // }
      // this.formInline.city = '';
      // this.cityList = [];
    },
    city(newVal){
      // if(newVal===''){


      // }else{
        //请求区县
        // var array =  this.cityList.filter((val)=>{
        //   return val.land===newVal
        // })
        // this.districtGet(array[0].landCode);
      // }
      // this.formInline.district="";
      // this.districtList = [];
    },
    district(newVal){
      // console.log(newVal);
      // if(newVal===''){
        // this.formInline.townstreet="";
        // this.townstreetList = [];
      // }else{
        // //请求街道
        // var array =  this.districtList.filter((val)=>{
        //   return val.district===newVal
        // })
        // this.townstreetGet(array[0].districtCode)
      // }
    },

  }
}
