<!-- 动态输入框组件 -->
<template>
	<view class="input-wrap">
		<input placeholder-class="placeholder-class" :password="isPassword" :type="_type" :class="focus?'focus':''"  @focus="onFocus" @blur="onBlur" :value="value" :placeholder="placeholder" @input="onInput" />
		<text class="cuIcon-close" v-if="clearable&&focus&&value" @tap="handleClose"></text>
		<view class="bottom-line"></view>
		<view class="code" :class="codefetching?'code-fetching':'text-blue'" @click="setCode" v-if="showCode">
			{{_codeText}}
		</view>
	</view>
</template>

<script>
	var _this, countDown;
	export default {
		data() {
			return {
				focus:false,
				isPassword:false,
				
				second: 0, //倒计时
				codeText:'获取验证码',
				codefetching:false
			};
		},
		props:{
			placeholder:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				required:true
			},
			clearable:{
				type:Boolean,
				default:true
			},
			showCode:{
				type:Boolean,
				default:false
			},
			setTime:{
				//倒计时时间设置
				type: [Number,String],
				default: 60,
			}
		},
		model:{
			prop:'value',
			event:'input'
		},
		mounted() {
			_this = this;
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		computed:{
			_type(){
				if(this.type == 'password'){
					this.isPassword = true;
					return 'text';
				}else{
					return this.type;
				}
			},
			_setTime() {
				//处理值
				const setTime = Number(this.setTime)
				return setTime>0 ? setTime : 60
			},
			_codeText(){
				//验证码倒计时计算
				if(this.second<=0){
					return this.codeText;
				}else{
					if(this.second<10){
						return '重新获取(0'+this.second+'s)';
					}else{
						return '重新获取('+this.second+'s)';
					}
				}
				
			}
		},
		methods:{
			onFocus(){
				this.focus = true
			},
			
			onBlur(){
				this.focus = false
			},
			onInput(e){
				this.$emit('input',e.target.value);
			},
			handleClose(){
				this.$emit('input','');
			},
			setCode(){
				//设置获取验证码的事件
				if(this.codefetching){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				this.$emit('setCode');
				this.runCode(this.setTime)
			},
			runCode(val){
				//开始倒计时
				if(String(val)=="0"){
					
					//判断是否需要终止循环
					this.second = 0; //初始倒计时
					clearInterval(countDown);//清理循环
					this.codefetching= false; //关闭循环状态
					return false;
				}
				if(this.codefetching){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				this.codefetching= true
				this.second = this._setTime //倒数秒数
				countDown = setInterval(function(){
					_this.second--
					if(_this.second==0){
						_this.codefetching= false
						clearInterval(countDown)
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss">
.placeholder-class{
	color:#cccccc;
}
.input-wrap{
	width:100%;
	height: 80upx;
	position: relative;
	display:flex;
	justify-content:space-between;
	align-items:center;
	&>input{
		height: 80upx;
		flex:1 1 auto;
		font-size: 28upx;
	}
	&>.cuIcon-close{
		flex:0 0 32upx;
		height: 32upx;
		line-height: 32upx;
		font-size: 26upx;
		background: #999999;
		color:#ffffff;
		border-radius: 50%;
		text-align: center;
	}
	&>input .bottom-line{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 1upx;
		text-align: center;
		border-radius: 5px;
		background-color: #ebebeb;
		transition: all .5s ease;
		background: #ebebeb linear-gradient(to right, rgba(41,108,224,1), rgba(41,108,224,1)) no-repeat center bottom;
		background-size: 0 1px;
		background-position: center bottom;
	}
	&>input.focus .bottom-line{
		background-size: 100% 1px;
	}
	.code{
		margin-left: 20upx;
		font-size: 28upx;
	}
	.code-fetching{
		color:#999999
	}
}
</style>
