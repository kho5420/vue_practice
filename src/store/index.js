import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        refData: {
            name: "",
            age: "",
            job: ""
        }
    },
    mutations: {
        saveData(state, data){
            state.refData = data
        }
    },
    actions: {
        saveData(context, data){
            context.commit('saveData', data)
        }
    }
})

export default store;