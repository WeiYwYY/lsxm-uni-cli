//使用Symbol类型对外隐藏内部私有属性
const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class LsxmRequest {
	
	//默认配置
	[config] = {
		baseURL: '',
		header: {
		    'content-type': 'application/json'
		},
		method: 'GET',
		dataType: 'json',
		responseType: 'text',
		sslVerify:false
	}
	//拦截器
	interceptors = {
		request: (func) => {
			if (func) {
				LsxmRequest[requestBefore] = func
			} else {
				LsxmRequest[requestBefore] = (request) => request
			}
		},
		response: (func) => {
			if (func) {
				LsxmRequest[requestAfter] = func
			} else {
				LsxmRequest[requestAfter] = (response) => response
			}
		}
	}

	static [requestBefore] (config) {
		return config
	}

	static [requestAfter] (response) {
		return response
	}

	static [isCompleteURL] (url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}
	//对外暴露出获取与修改config的方法
	setConfig (func) {
		this[config] = func(this[config])
	}
	
	getConfig () {
		return this[config]
	}
	
	//请求返回Promise
	request (options = {}) {
		options.baseURL = options.baseURL || this[config].baseURL
		options.dataType = options.dataType || this[config].dataType
		options.url = LsxmRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = {...options.header, ...this[config].header}
		options.method = options.method || this[config].method
		options.sslVerify = options.sslVerify || this[config].sslVerify
		options = {...options, ...LsxmRequest[requestBefore](options)}

		return new Promise((resolve, reject) => {
			options.success = function (res) {
				resolve(LsxmRequest[requestAfter](res))
			}
			options.fail= function (err) {
				reject(LsxmRequest[requestAfter](err))
			}
		    uni.request(options)
		})
	}

	get (url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	}

	post (url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
}

//插件暴露出的install方法，用于Vue.use('插件名')
LsxmRequest.install = function (Vue) {
	//在所有Vue实例的beforeCreate中混入接口，不需要每个页面引入
	Vue.mixin({
		beforeCreate: function () {
				if (this.$options.apis) {
					Vue._lsxmRequest = this.$options.apis
				}
		}
	})
	//为Vue原型添加属性
	Object.defineProperty(Vue.prototype, '$lsxmApi', {
		get: function () {
			return Vue._lsxmRequest.apis
		}
	})
}

export default LsxmRequest