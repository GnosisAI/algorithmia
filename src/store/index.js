import Vue from 'vue';
import Vuex from'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        algorithms: null,
        algorithm:null,
        filtredAlgorithms:null,
        catAlgorithms:null
    },
    mutations:{
        addAlgorithms(state, algos){
            state.algorithms = algos
        },
        addAlgorithm(state,alg){
            state.algorithm = alg
        },
        addFiltredAlgorithms(state, algos){
            state.filtredAlgorithms = algos
        },
        addCatAlgorithms(state, algos){
            state.catAlgorithms = algos
        }
    },
    actions:{
        getAlgos({commit}){
            global.console.log('get the data from api')
            axios.get('http://35.233.196.47:8081/api/algorithm/')
                .then(algos => {
                    commit('addAlgorithms',algos.data)
                })
        },
        getAlgoByName({commit},{name}){
            global.console.log('fetch for '+ name)
            axios.get('http://35.233.196.47:8081/api/algorithm/'+name)
                .then(alg => {
                    global.console.log(alg.data)
                    commit('addAlgorithm',alg.data)
                })
        },
        getFiltredAlgos({commit},{q}){
            global.console.log('fetch for '+ q)
            axios.get('http://35.233.196.47:8081/api/search?q='+q)
                .then(algos => {
                    global.console.log(algos.data)
                    commit('addFiltredAlgorithms',algos.data)
                })
        },
        getCatAlgos({commit},{cat}){
            global.console.log('fetch for '+ cat)
            axios.get('http://35.233.196.47:8081/api/cat/'+cat)
                .then(algos => {
                    global.console.log(algos.data)
                    commit('addCatAlgorithms',algos.data)
                })
        },
    
    },

})