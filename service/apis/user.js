//“我的”模块

import lsxmRequest from '../config.js'
export default{
	/*
	**  获取用户基础资料
	*/
	GetClientData(data){
		return lsxmRequest.post('Client/GetClientData', data)
	},
	/*
	**  编辑用户基础资料
	*/
	EditClient(data){
		return lsxmRequest.post('Client/EditClient', data)
	},
	/*
	**  获取认证信息
	*/
	GetClientInfo(data){
		return lsxmRequest.post('Client/GetClientInfo', data)
	},
	/*
	**  资质认证
	*/
	GetCertRecordInfo(data){
		return lsxmRequest.post('CertRecord/GetCertRecordInfo', data)
	},
}