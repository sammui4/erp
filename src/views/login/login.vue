<template>
	<div class="login_box">
		<!-- logo -->
		<img src="../../../static/img/login/logo.svg" class="logo">

		<!-- 右侧图片 -->
		<img src="../../../static/img/login/login_img.svg" class="login_img">

		<div class="login_message">
			<div class="login_message_inn">
			<img src="../../../static/img/login/product_name.svg">

			<!-- 主要输入框 -->
			<div class="login_msg">

				<div class="login-top">
					<el-select
						v-model="reqData.accountSetId"
						placeholder="请选择账套"
						class="select">
						<el-option
							v-for="(c, i) in companies"
							:key="i"
							:label="c.setName"
							:value="c.accountSetId"></el-option>
					</el-select>

          <el-input v-model="reqData.userAccount" class="input" placeholder="用户名" @keyup.enter.native="login"></el-input>
				</div>


				<el-input type="password" v-model="reqData.password" class="login_in" placeholder="密码" @keyup.enter.native="login"></el-input>
				<button type="primary" class="el-button submitLink el-button--primary" @click="login">{{isRequesting ? '正在登录' : '登 录'}}</button>
			</div>

			</div>
		</div>

		<!-- 公司信息 -->
		<p class="compang_msg">2018 © Nonferrous Metals ERP Power by <span>Creatson</span></p>
	</div>
</template>

<script>
import extend from 'extend';
import { mapMutations } from 'vuex';
import Validator from '@/utils/validator';
import { setToken } from '@/utils/token';

export default {
	data() {
		return {
		    reqData: {
		      	userAccount: '',
				password: '',
				accountSetId: null
			},
			isRequesting: false,
			companies: []
		};
	},

	created() {
		this.fetch();
		// 清空旧的数据
		this.clearUserData();
	},

	methods: {
		...mapMutations(['clearUserData']),

		fetch() {
			this.fetchCompanies();
		},

		fetchCompanies () {
			return this.$http.post('crs/finance/accountSet/getAll.do', {}).then(res => {
				let resData = res.data;

				if (!resData.istrue) {
					return Promise.reject(new Error(resData.msg));
				}

				this.companies = resData.data;
			}).catch(e => this.$message.error(e.message));
		},

		login() {
			if (this.isRequesting) {
				return;
			}

			let validator = new Validator();
			let reqData = extend(true, {}, this.reqData);

			validator.add('required', reqData.accountSetId, '请选择账套');
			validator.add('required', reqData.userAccount, '请输入用户名');
			validator.add('required', reqData.password, '请输入密码');

			let { isValid, msg } = validator.start();

			if (!isValid) {
				return this.$message.error(msg);
			}

			this.isRequesting = true;

			this.$http.post('tokenLogin.do', reqData)
				.then(res => {
					let resData = res.data;

					if (!resData.istrue) {
						return Promise.reject(new Error(resData.msg));
					}

					this.$message({
						type: 'success',
						message: '登录成功'
					});

					setToken(resData.data);

					this.$router.push('/views/index');

				})
				.catch(e => this.$message.error(e.message))
				.then(_ => this.isRequesting = false);
		}
	}
};
</script>

<style lang="scss">
.login_box {
	.el-input__inner {
		border: none;
	}
}
</style>


<style lang="scss" scoped>
.login_box {
	height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('../../../static/img/login/login_bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.logo {
	position: absolute;
	left: 41px;
	top: 43px;
}

.login_img {
	position: absolute;
	right: 0;
	bottom: 5%;
	width: 49%;
}

.login_message{
	height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left
}

.login_message_inn {
	width: 400px;
	padding-left: 93px;
}

.login_msg {
	position: relative;
	background: rgba(255,255,255,0.00);
	box-shadow: 0 18px 38px 0 #E1EAFC;
}

.compang_msg {
	position: absolute;
	left: 41px;
	bottom: 31px;
	font-size: 14px;
	color: #B3CBE0;
}

.compang_msg > span {
	color: #0064FF;
	background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#009DFF), to(#0064FF));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
}

.login_in {
	width: 100%;
	height: 60px;
	line-height: 60px;
	border-radius: 2px;
	font-size: 14px;
	background: #fff;
}

.login-top {
	display: flex;
	height: 60px;
	background: #fff;
	align-items: center;
	border-bottom: 1px solid #dcdfe6;

	.select {
		width: 150px;
	}

	.input {
		flex: 1;
	}
}


.submitLink{
	position: absolute;
	right: -50px;
    top: 35px;
    width: 104px;
    height: 50px;
    box-shadow: 0 12px 35px 0 rgba(52,77,178,0.34);
	border-radius: 2px;
	font-size: 14px;
	background-color: #0064FF
}
</style>
