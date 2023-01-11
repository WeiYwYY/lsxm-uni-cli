<template>
	<view class="login">
		<view class="logo">
			<image src="/static/img/logo.png"></image>
		</view>
		<view class="login-type">
			<view :class="loginType?'':'active'" @tap="changeLoginType(0)">
				手机登录
			</view>
			<view :class="loginType?'active':''" @tap="changeLoginType(1)">
				账号登录
			</view>
		</view>
		<view class="login-swiper" >
			<swiper :current="loginType" :duration="300" :circular="true" @change="swiperChange">
				<swiper-item>
					<view class="login-swiper-form">
						<view class="form-title">手机</view>
						<view class="input-wrap">
							<text class="iconfont iconmobile-phone"></text>
							<input type="text" placeholder="请输入手机" v-model="phone" />
						</view>
						<view class="form-title">验证码</view>
						<view class="input-wrap">
							<text class="iconfont iconsecurity"></text>
							<input type="text" placeholder="请输入验证码" v-model="code" />
							<text class="get-code">获取验证码</text>
						</view>
						<view class="btn-wrap flex justify-start align-center">
							<text class="text-blue" @tap="toRegister">立即注册</text>
						</view>
						<view class="login-btn" @tap="login">
							登录
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="login-swiper-form">
						<view class="form-title">用户名</view>
						<view class="input-wrap">
							<text class="iconfont iconbussiness-man"></text>
							<input placeholder="请输入用户名" type="text" v-model="username" />
						</view>
						<view class="form-title">密码</view>
						<view class="input-wrap">
							<text class="iconfont iconunlock"></text>
							<input :password="true" placeholder="请输入密码" type="text" v-model="password" />
						</view>
						<view class="btn-wrap flex justify-between align-center">
							<text class="text-blue" @tap="toRegister">立即注册</text>
							<text class="text-orange" @tap="toForget">忘记密码？</text>
						</view>
						<view class="login-btn" @tap="login">
							登录
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { Base64 } from '@/common/base64.js';
	import { mapState, mapActions } from 'vuex';
	export default {
		data(){
			return{
				loginType:0,//当前登录类型
				
				phone:'',//手机
				code:'',//验证码
				username:'',//用户名
				password:''//密码
			}
		},
		computed: {
			...mapState({
				token:({auth}) => auth.token
			})
		},
		mounted() {
			
		},
		methods:{
			...mapActions(['setToken']),
			changeLoginType(type){
				this.loginType = type
			},
			swiperChange(e){
				console.log(e)
				this.loginType = e.detail.current;
			},
			login(){
				uni.showToast({
					icon:'none',
					title:'登录成功',
					duration:2000,
					success: () => {
						setTimeout(()=>{
							uni.reLaunch({
								url:'/pages/home/home'
							})
						},2000)
					}
				})
			},
			toRegister(){
				uni.navigateTo({
					url:'/pages/loginRegister/register'
				})
			},
			toForget(){
				uni.navigateTo({
					url:'/pages/loginRegister/forgetPwd'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width:100%;
		padding:50upx 0 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		.logo{
			width:508upx;
			height: 300upx;
			image{
				wdith:100%;
				height: 100%;
			}
		}
		&-type{
			width: 580upx;
			height: 80upx;
			margin-top: 120upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			&>view{
				height: 80upx;
				width:150upx;
				text-align: center;
				line-height: 80upx;
				font-size:36upx;
				font-family:NotoSansHans-Medium,NotoSansHans;
				font-weight:600;
				&.active{
					color:#296ce0;
					position: relative;
					&::after{
						content: '';
						position: absolute;
						bottom: 0;
						left:50%;
						margin-left: -30upx;
						width: 60upx;
						height: 5upx;
						background: #296ce0;
					}
				}
			}
		}
		&-swiper{
			width:100%;
			height: 540upx;
			&>swiper{
				width: 100%;
				height: 100%;
			}
			&-form{
				width:100%;
				height: 540upx;
				padding:30upx 85upx 0;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				.form-title{
					width:100%;
					height: 80upx;
					line-height: 80upx;
					font-size: 25upx;
					font-family:NotoSansHans-Regular,NotoSansHans;
					font-weight:400;
					color:rgba(153,153,153,1);
				}
				.input-wrap{
					width: 100%;
					height:80upx;
					background:rgba(245,245,245,0.5);
					border-radius:7upx;
					border:2upx solid rgba(235,235,235,1);
					box-sizing: border-box;
					display: flex;
					align-items: center;
					padding:14upx;
					&>.iconfont{
						width:50upx;
						flex:0 0 50upx;
						color: #296ce0;
						font-size: 44upx;
					}
					&>input{
						flex:1 1 auto;
						font-size: 28upx;
					}
					&>.get-code{
						flex:1 1 185upx;
					}
				}
				.btn-wrap {
					width:100%;
					height: 80upx;
					margin-bottom: 30upx;
				}
				.login-btn{
					width:100%;
					height:80upx;
					line-height: 80upx;
					text-align: center;
					font-size:33upx;
					font-family:NotoSansHans-Medium,NotoSansHans;
					font-weight:500;
					color:rgba(255,255,255,1);
					background:rgba(41,108,224,1);
					border-radius:40upx;
				}
			}
		}
	}
</style>
