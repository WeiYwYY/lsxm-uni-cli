import LsxmRequest from './LsxmRequest'

const lsxmRequest = new LsxmRequest()

// 请求拦截器
lsxmRequest.interceptors.request((request) => {
	if (uni.getStorageSync('userInfo')) {
		request.header['guid'] = uni.getStorageSync('userInfo').guid;
	}
	return request
})

// 响应拦截器
lsxmRequest.interceptors.response((response) => {
	if (response.data.Message == '登录信息过期,请重新登陆' || response.data.isOverTime) {
		uni.removeStorage({
			key: 'userInfo'
		})
		uni.redirectTo({
			url: '/pages/loginAndRegister/login'
		})
	} else {
		return response;
	}
})

// 设置默认配置
lsxmRequest.setConfig((config) => {
	config.baseURL = 'http://www.linsionxm.com:8036/api/'        //测试
	if (uni.getStorageSync('userInfo')) {
		config.header['guid'] = uni.getStorageSync('userInfo').guid;
	}
	return config
})


export default lsxmRequest
