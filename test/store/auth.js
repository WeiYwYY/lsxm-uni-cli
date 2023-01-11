const state = { 
	token:uni.getStorage('TOKEN') || '',
};
const mutations = {
    setToken:(state, token)=>{
		state.token = token
		uni.setStorage({//将用户信息保存在本地  
			key: 'TOKEN',
			data: token
		});
	},
	unsetToken:(state)=>{
		state.token = ''
		uni.removeStorage({  
			key: 'TOKEN'
		})
	}
};
const getters = {
	getToken:(state)=>{
		return state.token
	}
};
const actions = {
	setToken:({commit}, token)=>{
		commit('setToken', token)
	},
	unsetToken:({commit})=>{
		commit('unsetToken')
	}
};
export default{
    state,
    mutations,
    actions,
    getters
}