import axios from 'axios';

const state = {
    user: null,
};

const getters = {

};

const mutations = {
    setUser(state, user){
        state.user = user
    }
};

const actions = {
    async doLogin({ commit }, { email, password, apiKey, utcTimeStamp, signature }){
        await axios.post('https://texxt.tk/api/v1/login',{email, password, apiKey, utcTimeStamp, signature})
        .then((data) => {
            console.log(data)
        }).catch((error) => console.log(error))
        commit('setUser')
    },
    async doRegister({ commit }, { name, lastname, identy_document, telephone,
        NIT, razon_social, type_user_id, email, verify_tc, password, password_confirmation, apiKey, utcTimeStamp, signature }){
            if(type_user_id == 1){
                await axios.post('https://texxt.tk/api/v1/register',{ telephone,
                NIT, razon_social, type_user_id, email, verify_tc, password, password_confirmation, apiKey, utcTimeStamp, signature}).then((data) => {
                    console.log(data)
                 }).catch((error) => console.log(error))
            }else{
                await axios.post('https://texxt.tk/api/v1/register',{ name, lastname, identy_document, telephone,
                type_user_id, email, verify_tc, password, password_confirmation, apiKey, utcTimeStamp, signature}).then((data) => {
                    console.log(data)
                }).catch((error) => console.log(error))
            }
        
        // commit('setUser', user)
        commit('setUser')
    },
    async doLogout({ commit }){
        commit('setUser', null)
    }
};

export default {
    namesapced: true,
    state,
    getters,
    actions,
    mutations
};