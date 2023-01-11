//资产类型
const bidTypeFilter = function(val){
	switch(val){
		case 1:
			return '店面';
			break;
		case 2:
			return '厂房';
			break;
		case 3:
			return '土地';
			break;
		case 4:
			return '写字楼';
			break;
		case 5:
			return '机械设备';
			break;
		case 6:
			return '其他';
			break;
		case 7:
			return '林场';
			break;
		default:
			return '未注明';
			break;
	}
}

export default{
	bidTypeFilter
}