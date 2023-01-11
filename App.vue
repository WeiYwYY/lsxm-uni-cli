<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //锁定屏幕方向
			// #endif
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style>
	/*colorui 样式*/
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
	/*每个页面公共css */
	@import url("/static/iconfont/iconfont.css");
	page{
		background: #ffffff;
	}
</style>
