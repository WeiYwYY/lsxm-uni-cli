<template>
	<view class="change-pwd">
		<view class="title">新密码</view>
		<reg-input v-model="oldPwd" placeholder="请输入旧密码"></reg-input>
		<view class="title">确认新密码</view>
		<reg-input v-model="newPwd" type="password" placeholder="请输入新密码"></reg-input>
		<view class="title">手机验证码</view>
		<reg-input v-model="code" :setTime="60" @setCode="getCode" :showCode="true" placeholder="请输入验证码"></reg-input>
		<view class="confirm-btn">
			提交
		</view>
	</view>
</template>

<script>
	import RegInput from '@/components/register-input.vue';
	export default {
		data(){
			return{
				oldPwd:'',
				newPwd:'',
				code:''
			}
		},
		components:{
			RegInput
		},
		computed: {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.change-pwd{
		padding:20upx 36upx;
		box-sizing: border-box;
		box-shadow: inset 0 20upx 20upx -20upx rgba(0,0,0,0.1);
		.title{
			line-height: 80upx;
			font-size:33upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
		 }
		 .confirm-btn{
			 position: fixed;
			 bottom: 54upx;
			 left: 103upx;
			 width:544upx;
			 height: 80upx;
			 border-radius: 40upx;
			 line-height: 80upx;
			 text-align: center;
			 background: #296ce0;
			 font-size:43upx;
			 font-family:PingFang SC;
			 font-weight:400;
			 color:rgba(255,255,255,1);
		 }
	}
</style>
