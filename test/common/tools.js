/* 
** 防抖函数
** func:需要防抖的函数,delay:防抖延时
*/
var debounce = (func,delay)=>{
	console.log("debounce1")
	var timer = null;
	return ()=>{
		console.log("debounce2")
		var context = this,args = arguments;
		timer&&clearTimeout(timer)
		timer = setTimeout(()=>{
			func.apply(context,args)
		},delay)
	}
}

/* 
** 节流函数
** func:需要节流的函数,delay:节流延时
*/
var throttle = function(func,delay){
	var _start = Date.now();
	return function(){
		var _now = Date.now(),context = this,args = arguments;
		if(_now - _start >= delay){
			func.apply(context,args);
			_start = Date.now();
		}
	}
}

/* 
** '/Date(1518943415760+0800)/'格式化
*/

var formatDate = function (time) {
    var t = time.slice(6, 19)
    var NewDtime = new Date(parseInt(t));
    return dateTrans(NewDtime);
	function dateTrans(dt) {
	    var y = dt.getFullYear();
	        var m = dt.getMonth() + 1;
	        m = m < 10 ? ('0' + m) : m;
	        var d = dt.getDate();
	        d = d < 10 ? ('0' + d) : d;
	        var h = dt.getHours();
			h = h < 10 ? ('0' + h) : h;
	        var minute = dt.getMinutes();
	        minute = minute < 10 ? ('0' + minute) : minute;
	        return y + '-' + m + '-' + d+' '+h+':'+minute;
	}
}

/* 
** 时间戳格式化
** @param fmt 格式化模板如:'yyyy-MM-dd hh:mm:ss'
** @returns {String} 2020-01-01 01:01:01
*/
var protoDateFormat = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/* 
** 截屏并保存到系统相册（APP中使用）
** 返回object，包含保存后的系统路径
*/
var screenShot = function(name){
	let bitmap = null;
	let pages = getCurrentPages();  
	let page = pages[pages.length - 1];  
	let currentWebview = page.$getAppWebview();
	// let currentWebview = plus.webview.currentWebview(); 
	bitmap = new plus.nativeObj.Bitmap('shotID');
	currentWebview.draw(bitmap,()=>{
		bitmap.save(name,{},(i)=>{
			plus.gallery.save(i.target,(res)=>{
				uni.showToast({
					title:'保存至相册成功'
				})
			})
		})
	})
}

export default {
	debounce,
	throttle,
	formatDate,
	screenShot
}