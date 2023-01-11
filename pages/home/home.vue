<template>
	<view class="home flex">
		<!-- {{title}} -->
		<view class="basis-df flex align-center justify-center">
			
			<view class="">
				哈哈
			</view>
		</view>
		<view class="basis-df align-center justify-center">
			右
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data(){
			return{
				title:'首页'
			}
		},
		components:{
			
		},
		computed: {
			...mapState({
				token:({auth}) => auth.token
			})
		},
		onLoad(){
			this.initHomePage();
		},
		methods:{
			initHomePage(){
				
			}
		}
	}
</script>
<style>
	page{
		background: #ebebeb;
	}
</style>
<style lang="scss" scoped>
.home{
	.swiper{
		width:100%;
		height: 272upx;
		background: #ffffff;
		image{
			width:100%;
			height: 100%;
		}
	}
	.notice-wrap{
		width:100%;
		margin-top: 30upx;
		background: #ffffff;
		.notice-top{
			width:100%;
			flex-direction: column;
			padding: 15upx 36upx;
			border-bottom: 2upx solid #ebebeb;
			box-sizing: border-box;
			.top-item{
				width: 100%;
				height: 60upx;
				line-height: 60upx;
				.iconfont{
					color:#fe9900;
					font-size: 40upx;
					flex: 0 0 50upx;
				}
				.title{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					flex:1 1 auto;
					color: #333333;
					font-size: 28upx;
				}
				.date{
					margin-left: 80upx;
					flex:1 0 150upx;
					font-size: 28upx;
					color: #666666;
				}
			}
		}
		.notice-bottom{
			height: 188upx;
			padding:0 36upx;
			box-sizing: border-box;
			width: 100%;
			.bottom-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex:1 1 102upx;
				image{
					width:72upx;
					height: 72upx;
				}
				text{
					text-align: center;
					line-height: 26upx;
					font-size: 24upx;
					color:#333333;
					margin-top: 18upx;
				}
			}
		}
	}
	.project-wrap{
		margin-top: 30upx;
		.title-wrap{
			width:100%;
			height: 107upx;
			padding-right: 36upx;
			border-bottom: 2upx solid #ebebeb;
			box-sizing: border-box;
			background: #ffffff;
			.title{
				line-height: 44upx;
				padding-left: 28upx;
				border-left: 8upx solid #296ce0;
				box-sizing: border-box;
				color: #333333;
				font-size: 32upx;
				font-weight: 500;
				font-family:NotoSansHans-Medium,NotoSansHans;
				flex: 1 1 auto;
			}
			.more-btn{
				flex:0 0 150upx;
				color: #999999;
				font-size:25upx;
				font-family:NotoSansHans-Regular,NotoSansHans;
				font-weight:400;
			}
		}
	}
	.load-more{
		width:100%;
		height: 88upx;
		line-height: 88upx;
		text-align: center;
		font-size: 30upx;
		color: #296ce0;
		background: #ffffff;
		font-family:NotoSansHans-Regular,NotoSansHans;
	}
}
</style>
