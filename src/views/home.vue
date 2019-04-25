<template>
    <div class="app">

    <!-- 头部 begin -->
    <header class="globalHeader">
        <span class="iconfont icon-toplogo logo"></span>
        <span class="logoTitle">天奇ERP-奇造未来</span>
        <div class="userMessageList">
            <a class="iconfont icon-new userMessageLink" href="javascript:void(0);">
                <span class="">5</span>

                <!-- 通知提醒内容模块 begin -->
                <div class="user_Message_Dia">
                    <header class="user_Message_head">
                        通知提醒
                    </header>
                    <ul class="user_Message_list scrollbar">
                        <li v-for="item in message_list">
                            <span class="iconfont"
                            v-bind:class="{
                                'icon-kehujiaoliaojiagongdingdan': item.messageFlag === 'CHANGE',
                                'icon-guanbi1': item.messageFlag === 'CLOSE',
                                'icon-caigourukudan': item.messageFlag === 'AUDIT',
                                'icon-kucunmingxichaxun': item.messageFlag === 'ANTI-AUDIT',
                                'icon-jitaixinxi': item.messageFlag === 'MODIFY',
                                'icon-weiwaijiaoliaojiagong': item.messageFlag === 'SUBMIT',
                                'icon-kucunhuowei': item.messageFlag === 'WH-SUBMIT',
                                'icon-caidanguanli': item.messageFlag === 'ENTRY-DATE',
                                'icon-jianbantiaozhengjiashezhi': item.messageFlag === 'NEW',
                            }"></span>
                            <p class="user_Message_tit">{{item.messageTitle}}</p>
                            <p class="user_Message_Msg">{{item.messageContent}}</p>
                            <p class="user_Message_time">{{item.sendTime | formatDate}}</p>
                        </li>
                    </ul>
                </div>
                <!-- 通知提醒内容模块 end -->

            </a>
            <span class="iconfont icon-ren userIcon"></span>
            <el-dropdown
                style="height: 48px"
                placement="bottom"
                @command="handleCommand">
                <span class="el-dropdown-link userName">{{currentUser.userText}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
    <!-- 头部 end -->


    <!-- 中间盒子内容 begin -->
    <div :class="globalNavList_Width?'globalMainBox active':'globalMainBox'">

        <!-- 一级导航 begin -->
        <nav class="globalNav">
            <a class="iconfont icon-shousuo globalNavChange" @click="globalNavChange" title="侧边栏切换" href="javascript:void(0);"></a>
            <ul class="globalNavInn">

                <router-link
                    tag="li"
                    v-for="(item,index) in currentNavs"
                    :to="{path: '/views' + item.menuUrl}"
                    :key="index"
                    active-class="active"
                    v-bind:class="{'actived': currentNav === item}">
                    <span class="iconfont firstNavIcon" :class="['icon-' + item.menuIcon]"></span>
                    {{item.menuName}}
                </router-link>

            </ul>
        </nav>
        <!-- 一级导航 end -->

        <!-- 左侧二级导航 begin fadeOutLeft-->
        <aside class="animated globalNavList"
            v-bind:class="{
                'fadeOutLeft': !globalNavList_Width,
                'fadeOutRight': globalNavList_Width
            }"
            v-if="currentAsides.length">
            <el-scrollbar class="globalScrollbar" style="height:100%">
                <div
                    class="globalNavBox"
                    v-for="(items, key) in currentAsides"
                    :key="key">
                    <p class="globalNavTit">{{items.menuName}}</p>
                    <ul class="globalNavLink">

                        <router-link
                            tag="li"
                            v-for="(item,index) in items.children"
                            :to="{path: '/views' + item.menuUrl}"
                            :key="index"
                            active-class="active">
                            <span class="iconfont" :class="['icon-' + item.menuIcon]"></span>
                            {{item.menuName}}
                        </router-link>

                    </ul>
                </div>
            </el-scrollbar>
        </aside>
        <!-- 左侧二级导航 end -->

        <!-- 主要展示内容区域 begin -->
        <article class="globalContent scrollbar">
            <transition name="faded" mode="out-in">
                <keep-alive :include="currentTabs.map(v => v.menuCode)">
                    <router-view :key="key" />
                </keep-alive>
            </transition>
        </article>
        <!-- 主要展示内容区域 end -->

    </div>
    <!-- 中间盒子内容 end -->

    <!-- 底部固定标签页 begin -->
    <footer class="globalTabs" v-if="currentTabs.length">
        <el-tabs
            :value="currentTabIndex"
            type="card"
            class="globalTabsList"
            closable
            @tab-remove="removeTab"
            @tab-click="clickTab">
            <el-tab-pane
                v-for="(item, index) in currentTabs"
                :key="index"
                :label="item.menuName"
                :name="index + ''">
            </el-tab-pane>
        </el-tabs>
    </footer>
    <!-- 底部固定标签页 end -->
</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import nav_data from '@/utils/navList.js'
import { formatDate } from '@/utils/utils'

export default {
    name: 'App',
    data () {
        return {
            globalNavList_Width: true,
            message_list: []
        }
    },
    created() {
        // 此处获取当前用户信息 和当前用户菜单权限
        this.getNavs();
        this.loadMessage();
    },
    filters: {
        formatDate(t) {
          return formatDate(t, 'yy/MM/dd hh:mm');
        }
    },
    methods: {
        ...mapActions(['getCurrentUser', 'getNavs']),
        ...mapMutations(['setCurrentTabIndex', 'removeTabByIndex']),

        // 加载列表数据
        loadMessage() {
          this.$http({
            url: 'crs/message/message/queryPage.do',
            method:'post',
            data:{
              message_State: 0,
              page: 1,
              rows: 10,
            }
          }).then((res)=>{
            if (res.data && res.data.istrue) {
                this.message_list = [];
                this.message_list = res.data.data.rows
            }
          })
        },

        handleCommand (command) {
            let map = {logout: 'handleLogout',changePassword:'changePassword'};

            let m = map[command];

            if (m && this[m]) {
                this[m]();
            }
        },

        handleLogout () {
            this.$http.post('tokenLoginOut.do', {userAccount: this.currentUser.username})
                .then(res =>{
                    let resData = res.data;

                    if (!resData.istrue) {
                        return Promise.reject(new Error(resData.msg));
                    }

                    this.$router.push('/views/login')
                })
                .catch(e => this.$message.error(e.message))
        },
        // 去除tabs
        removeTab (index) {
            index = Number(index);

            let tabIndex = Number(this.currentTabIndex);
            // 当前删除的 小于当前激活的
            if (index < tabIndex) {
                this.setCurrentTabIndex(tabIndex - 1)
            } else if (index === tabIndex) {
                // 当前删除的 为当前激活的
                let tabs = this.currentTabs;
                let next = tabs[index - 1] || tabs[index + 1] || {menuUrl: '/index'};

                this.$router.push('/views' + next.menuUrl);
            }
            // 当前删除的大于当前激活的 只需要直接删除 不需要做任何处理
            this.removeTabByIndex(index);

        },
        // 点击tabs
        clickTab(tab) {
            let index = tab.name;
            let url = this.currentTabs[index].menuUrl;

            this.setCurrentTabIndex(index);

            this.$router.push('/views' + url);
        },

        // 二级导航切换隐藏事件
        globalNavChange() {
            this.globalNavList_Width = !this.globalNavList_Width;
        },
        changePassword(){
          this.$router.push('/views/access_management/outer_account/change_password')
        }
    },
    computed: {
        key() {
            return this.$route.fullPath
        },

        ...mapState([
            'currentUser',
            'currentNavs',
            'currentNav',
            'currentAsides',
            'currentTabs',
            'currentTabIndex'
        ])
    }

}
</script>

<style lang="scss">
.app {
    font-family: "Helvetica Neue",Helvetica,Arial,Tahoma,'Microsoft Yahei','PingFang SC','Hiragino Sans GB','WenQuanYi Micro Hei',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.login_wrap {
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

// logo头部部分 begin
.globalHeader {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 60px;
    width: 100%;
    background-image: linear-gradient(-225deg,#0072f3,#00b1fd);
}

.logo {
    color: #fff;
    font-size: 32px;
    margin: 12px 14px 8px 23px;
}

.logoTitle {
    font-size: 16px;
    color: #fff;
    line-height: 25px;
    margin: 18px 0 17px 0;
}

.userMessageList {
    position: absolute;
    top: 0;
    right: 68px;
    height: 60px;
    line-height: 60px;
}

.userMessageLink {
    display: inline-block;
    vertical-align: text-bottom;
    position: relative;
    font-size: 18px;
    color: #fff;
    padding: 0 40px;
}

.userMessageLink > span {
    position: absolute;
    top: 23px;
    right: 20px;
    width: 16px;
    height: 15px;
    line-height: 15px;
    font-size: 10px;
    border-radius: 3px;
    text-align: center;
    background-color: #0074ca;
    color: #ffffff;
}

.user_Message_Dia {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    position: fixed;
    right: 173px;
    top: 60px;
    z-index: 9999;
    width: 300px;
    height: 360px;
    border-radius: 6px;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.20);
    background-color: #fff;
}

.userMessageLink:hover > .user_Message_Dia {
    visibility: visible;
    opacity: 1;
}

.user_Message_head {
    height: 60px;
    position: relative;
    line-height: 60px;
    padding-left: 25px;
    font-size: 16px;
    font-weight: bold;
    color: #666666;
    border-bottom: 1px solid #DEE6EC;
}

.user_Message_head:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -7px;
    right: 29px;
    border-style: solid;
    border-width: 0 6px 8px 6px;
    border-color: transparent transparent #fff transparent;
}

.user_Message_list {
    height: 290px;
    box-sizing: border-box;
    padding: 21px 18px 26px 24px;
    overflow-x: hidden;
    overflow-y: auto;
}

.user_Message_list > li {
    display: inline-block;
    position: relative;
    padding-left: 58px;
    line-height: initial;
}

.user_Message_list > li > span {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #DEE6EC;
    border-radius: 1000px;
    font-size: 16px;
}

.user_Message_tit {
    position: relative;
    font-size: 13px;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0;
    line-height: 25px;
}

.user_Message_list .icon-guanbi1{
    color: #F84040
}

.user_Message_list .icon-kehujiaoliaojiagongdingdan,
.user_Message_list .icon-caigourukudan,
.user_Message_list .icon-kucunmingxichaxun,
.user_Message_list .icon-jitaixinxi,
.user_Message_list .icon-weiwaijiaoliaojiagong,
.user_Message_list .icon-kucunhuowei,
.user_Message_list .icon-caidanguanli,
.user_Message_list .icon-jianbantiaozhengjiashezhi{
    color: #0064FF
}

.user_Message_time {
    text-align: right;
    font-size: 11px;
    font-weight: initial;
    color: #CCCCCC;
    letter-spacing: 0;
}

.user_Message_Msg {
    position: relative;
    font-size: 12px;
    padding-bottom: 34px;
    color: #B3B3B3;
    letter-spacing: 0;
    line-height: 25px;
    text-align: justify;
}

.user_Message_Msg:before {
    content: "";
    display: block;
    position: absolute;
    left: -37px;
    top: 26px;
    width: 1px;
    height: 100%;
    background-color: #DEE6EC;
}

.user_Message_list > li:last-child > .user_Message_Msg {
    margin-bottom: 0;
}

.user_Message_list > li:last-child > .user_Message_Msg:before {
    display: none;
}

.user_Message_Msg > span {
    display: inline-block;
    margin: 0 3px;
    color: #2A2A2A;
}

.userIcon {
    display: inline-block;
    vertical-align: text-bottom;
    font-size: 20px;
    color: #fff;
    margin-right: 21px;
}

.userName {
    display: inline-block;
    vertical-align: text-bottom;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.1px;
        position: relative;
}

.userName:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 26px;
    right: -30px;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
}
// logo头部部分 end

.globalMainBox {
    flex: auto;
    display: flex;
    padding: 133px 0 30px 0;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
}

/* 左侧导航栏 begin */
.globalNavList {
    // display: none;
    flex: none;
    width: 190px;
    padding-top: 0;
    flex-direction: column;
    background-color: #fff;
    border-right: 1px solid #F0F0F0;
    color: #333;
    overflow-x: hidden;
    overflow-y: auto;
}
// .globalMainBox.active .globalNavList {
    // display: flex;
    // width: 0;
// }
.globalNavBox {
    padding-bottom: 18px;
    margin-bottom: 18px;
    position: relative;
}

.globalNavBox:before {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    bottom: 0;
    width: 150px;
    height: 1px;
    opacity: 0.54;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.12);
}

.globalNavBox:last-child:before {
    display: none
}

.globalNavTit {
    font-size: 12px;
    color: #999;
    letter-spacing: 1px;
    line-height: 14px;
    padding-left: 21px;
    margin-bottom: 5px;
    white-space:nowrap;
}

.globalNavLink > li {
    position: relative;
    font-size: 13px;
    color: #454545;
    letter-spacing: 0.93px;
    line-height: 35px;
    padding-left: 21px;
    cursor: pointer;
    transition: 0.2s;
    white-space:nowrap;
}

.globalNavBox.active > ul > li:first-child,
.globalNavLink > li.active
{
    background-color: #006EFF;
    color: #fff;
}

.globalNavLink > li:hover {
    color: #006EFF
}

.globalNavLink > li.active:hover
{
    color: #fff;
}

.globalNavLink > li > .iconfont {
    margin-right: 10px;
    font-size: 14px;
    vertical-align: middle;
}
// 左侧导航栏 end

// 一级导航 begin
.globalNav {
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 4;
    width: 100%;
    min-width: 1146px;
    padding-left: 31px;
    background-color: #F3F6FA;
    display: flex;
    align-items: center;
}

.globalNav:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 10px;
    box-shadow: 0 -2px 6px 0 rgba(213,220,230,.6)inset;
}

.globalNavChange {
    padding: 12px 18px 12px 0;
    color: #7E889A;
    font-size: 10px;
}

.globalNavChange:hover {
    color: #0373F5;
}

.globalNavInn {
    // display: inline-block;
    padding: 7px 50px 0 22px;
    position: relative;
    display: flex;
    flex-grow: 1;
}

.globalNavInn:before {
    content: "";
    position:absolute;
    top: 20px;
    left: 0;
    display: block;
    width: 1px;
    height: 20px;
    background-color: #D8DDE4;
}

.globalNavInn > li {
    // display: inline-block;
    height: 46px;
    line-height: 46px;
    // width: 150px;
    max-width: 200px;
    position: relative;
    font-size: 14px;
    color: #7E889A;
    letter-spacing: -0.03px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    flex-grow: 1;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
}

.globalNavInn > li:hover {
    color: #0373F5;
}

.globalNavInn > li:hover > span {
    color: #0373F5;
}

.globalNavInn > li.active,
.globalNavInn > li.actived {
    color: #0373F5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 -3px 6px 0 #d5dce6;
    background-color: #fff;
}

.globalNavInn > li.active:before,
.globalNavInn > li.actived:before {
    content: "";
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 0;
    display: block;
    height: 3px;
    background-color: #008FFF
}

.firstNavIcon {
    // display: inline-block;
    width: 14px;
    height: 14px;
    font-size: 14px;
    margin-right: 8px;
    color: #7E889A;
    font-weight: normal;
}
.globalNavInn > li.actived > .firstNavIcon {
    color: #0373F5;
}
.globalNavInn > li.active > .firstNavIcon {
    color: #0373F5;
}
// 一级导航 end

.globalContent {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: auto;
    overflow: auto;
    padding: 35px 20px 10px 20px;
    background-color: #fff;
    color: #fff;
}

.globalTabs {
    // display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 100%;
    color: #fff;
    background-color: #F7F8F9;
    box-shadow: 0 -2px 15px 0 #dfe1e4;
    z-index: 9;
}

@-webkit-keyframes fadeOutLeft {
  from {
    width: 190px;
    opacity: 0.2;
  }

  to {
    width: 0;
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    width: 190px;
    opacity: 0.2
  }

  to {
    width: 0;
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutRight {
  from {
    width: 0;
    opacity: 0
  }

  to {
    width: 190px;
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    width: 0;
    opacity: 0
  }

  to {
    width: 190px;
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@media (max-width: 1366px) {

    .globalNavInn > li.active:before,
    .globalNavInn > li.actived:before {
        left: 14px;
        right:14px;
    }

}
</style>
