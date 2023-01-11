//用户身份、登录相关接口

import lsxmRequest from '../config.js'
export default{
	/*
	**  校验手机号是否存在
	*/
	CheckTel(data){
		return lsxmRequest.post('/Client/CheckCellphone', data)
	},
	/*
	**  获取验证码
	*/
	GetSMSCode(){
		return lsxmRequest.get('/Client/GetSMSCode')
	},
	/*
	**  账号密码登录
	*/
	LoginByAccount(data){
		return lsxmRequest.post('Client/LoginByAccount', data)
	}
}