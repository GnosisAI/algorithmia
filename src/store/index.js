import Vue from 'vue';
import Vuex from'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        algorithms: null,
        algorithm:null
    },
    mutations:{
        addAlgorithms(state, algos){
            state.algorithms = algos
        },
        addAlgorithm(state,alg){
            state.algorithm = alg
        }
    },
    actions:{
        getAlgos({commit}){
            console.log('get the data from api')
            axios.get('http://35.233.196.47:8081/api/algorithm/')
                .then(algos => {
                    commit('addAlgorithms',algos.data)
                })
        },
        getAlgoByName({commit},{name}){
            console.log('fetch for '+ name)
            axios.get('http://35.233.196.47:8081/api/algorithm/'+name)
                .then(alg => {
                    console.log(alg.data)
                    commit('addAlgorithm',alg.data)
                })
        }
    
    },

})