<template>
	<view class="mine">
		<view class="top-info">
			<view class="name-wrap flex justify-start align-center">
				<view class="">{{userInfo.name}}</view>
				<image src="/static/img/mine/starHL_icon.png" mode=""></image>
				<image src="/static/img/mine/star_icon.png" mode=""></image>
			</view>
			<view class="tel">{{userInfo.tel}}</view>
			<view class="info-nav flex justify-around align-center">
				<view class="info-item" >
					<image src="/static/img/mine/baseInfo_icon.png" mode=""></image>
					<text>基础资料</text>
				</view>
				<view class="info-item">
					<image src="/static/img/mine/checkInfo_icon.png" mode=""></image>
					<text>认证信息</text>
				</view>
				<view class="info-item">
					<image src="/static/img/mine/qualityInfo_icon.png" mode=""></image>
					<text>资质认证</text>
				</view>
			</view>
		</view>
		<view class="nav">
			<view class="nav-item">
				<text class="title">交易流程</text>
				<text class="cuIcon-right"></text>
			</view>
			<view class="nav-item">
				<text class="title">下载中心</text>
				<text class="cuIcon-right"></text>
			</view>
			<view class="nav-item">
				<text class="title">招租规程</text>
				<text class="cuIcon-right"></text>
			</view>
			<view class="nav-item">
				<text class="title">操作说明</text>
				<text class="cuIcon-right"></text>
			</view>
			<view class="nav-item">
				<text class="title">系统设置</text>
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<view class="logout-btn" @tap="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				userInfo:{
					name:'张三',
					tel:'17606067627'
				}
			}
		},
		onNavigationBarButtonTap(e) {
			console.log('点击了消息按钮')
		},
		methods:{
			logout(){
				uni.showModal({
					title:'确定退出登录？',
					success: (res) => {
						if(res.confirm){
							uni.redirectTo({
								url:'/pages/loginRegister/login'
							})
						}else{
							
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top-info{
		width:100%;
		height: 294upx;
		background: url(../../static/img/mine/background.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		padding:50upx 90upx;
		box-sizing: border-box;
		.name-wrap{
			width:100%;
			height: 44upx;
			line-height: 44upx;
			&>view{
				line-height: 44upx;
				font-size:40upx;
				font-family:NotoSansHans-Bold,NotoSansHans;
				font-weight:bold;
				color:rgba(255,255,255,1);
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			&>image{
				flex:0 0 44upx;
				height: 44upx;
				margin-left: 22upx;
			}
		}
		.tel{
			line-height: 34upx;
			margin-top: 24upx;
			font-size:33upx;
			font-family:NotoSansHans-Regular,NotoSansHans;
			font-weight:400;
			color:rgba(255,255,255,1);
		}
		.info-nav{
			width:678upx;
			height: 180upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 0upx 27upx 0upx rgba(51,51,51,0.2);
			border-radius:7upx;
			position: absolute;
			bottom: -90upx;
			left: 36upx;
			padding: 0 22upx;
			box-sizing: border-box;
			.info-item{
				flex:0 0 102upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				&>image{
					width: 88upx;
					height: 88upx;
				}
				&>text{
					width:100%;
					font-size:25upx;
					margin-top: 14upx;
					font-family:NotoSansHans-Regular,NotoSansHans;
					font-weight:400;
					color:rgba(51,51,51,1);
				 }
			}
		}
	}
	.nav{
		width:100%;
		margin-top: 126upx;
		padding:0 36upx;
		box-sizing: border-box;
		&-item{
			width:100%;
			height: 110upx;
			border-bottom: 1upx solid #ebebeb;
			box-sizing: border-box;
			line-height: 109upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:nth-last-child(1){
				border-bottom: none;
			}
			.title{
				font-size:33upx;
				font-family:NotoSansHans-Regular,NotoSansHans;
				font-weight:400;
				color:rgba(51,51,51,1);
			}
			.cuIcon-right{
				font-size:44upx;
				font-weight:400;
				color:rgba(51,51,51,1);
			}
		}
	}
	.logout-btn{
		width:678upx;
		height:80upx;
		line-height: 76upx;
		background:rgba(41,108,224,0);
		border-radius:40upx;
		border:2upx solid rgba(41,108,224,1);
		box-sizing: border-box;
		margin: 26upx auto;
		font-size:33upx;
		font-family:NotoSansHans-Medium,NotoSansHans;
		font-weight:500;
		color:rgba(41,108,224,1);
		text-align: center;
	}
</style>
