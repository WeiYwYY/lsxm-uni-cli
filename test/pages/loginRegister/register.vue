<template>
	<view class="register">
		<view class="register-title">用户名</view>
		<reg-input v-model="username" placeholder="请输入用户名"></reg-input>
		<view class="register-title">密码</view>
		<reg-input v-model="password" type="password" placeholder="8-16,同时包含字母+数字"></reg-input>
		<view class="register-title">确认密码</view>
		<reg-input v-model="confirmpwd" type="password" placeholder="请再次输入密码"></reg-input>
		<view class="register-title">手机号</view>
		<reg-input v-model="phone" type="number" placeholder="请输入手机号"></reg-input>
		<view class="register-title">验证码</view>
		<reg-input v-model="code" :setTime="60" @setCode="getCode" :showCode="true" placeholder="请输入验证码"></reg-input>
		<checkbox-group>
			<view class="agreement flex justify-start align-center" >
				<checkbox class="checkboxclass blue" :class="agreementChecked?'checked':''" @tap="agreementTip" :checked="agreementChecked"></checkbox>
				<label>
					<text>我已阅读并同意</text>
					<text class="text-blue" @tap="showAgreement">《招租规程》</text>
				</label>
			</view>
		</checkbox-group>
		<view class="register-btn cu-btn bg-blue" @tap="register">注册</view>
		<view class="cu-modal" :class="agreementShow?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">招租规程</view>
				</view>
				<view class="padding-xl">
		
					甲方：（委托方）用户
					乙方：（受托方）福州竞价平台
		
					根据平等自愿的原则，甲、乙双方经过友好协商，就甲方委托乙方代理事宜达成一致意见，并签订本协议。
		
					第一条 委托代理事项及范围
					甲方委托乙方办理竞价服务。
		
					第二条 双方的权利和义务
		
					1. 甲方的权利义务 。。。。。
					正文内容
		
					甲方：用户
					代表签字：XXXX
					地址：
					电话：
					传真：
					XXXX年XX月XX日
		
					乙方：福州竞价平台
					代表签字：
					地址：
					电话：
					传真：
					XXXX年XX月XX日
		
				</view>
				<view class="cu-bar bg-white justify-center">
					<view class="action">
						<button class="cu-btn bg-blue" @tap="hideAgreement()">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import regInput from '../../components/register-input.vue'
	import { Base64 } from '@/common/base64.js'
	export default {
		data(){
			return{
				username:'',
				password:'',
				confirmpwd:'',
				phone:'',
				code:'',
				
				agreementChecked:false,
				agreementShow:false
			}
		},
		components:{
			regInput
		},
		computed: {
			
		},
		methods:{
			getCode(){
				console.log('获取验证码')
			},
			agreementTip(){
				this.agreementChecked = !this.agreementChecked;
			},
			showAgreement(){
				this.agreementShow = true
			},
			hideAgreement(){
				this.agreementShow = false
			},
			register(){
				let param = {
					Cellphone:this.phone,
					Role:1
				}
				this.$lsxmApi.CheckTel(param).then((res)=>{
					console.log('checkphone',res)
				})
				// uni.navigateBack({
				// 	delta:-1
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register{
		padding:20upx 36upx;
		box-sizing: border-box;
		box-shadow: inset 9upx 16upx 16upx #f6f6f6;
		&-title{
			height: 80upx;
			line-height: 80upx;
			font-size:29upx;
			font-family:NotoSansHans-Regular,NotoSansHans;
			font-weight:400;
			color:rgba(153,153,153,1);
		}
		.checkboxclass{
			transform: scale(0.6);
		}
		.agreement{
			height: 120upx;
			font-size: 28upx;
		}
		.register-btn{
			width:100%;
			height: 80upx;
			line-height: 80upx;
			font-size: 32upx;
			background:rgba(41,108,224,1);
			border-radius:40upx;
			text-align: center;
			margin-top: 10upx;
		}
	}
</style>
