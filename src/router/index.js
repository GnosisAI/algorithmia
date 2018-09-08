import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../components/home/Container'
import Algorithm from '../components/Algorithm/Algorithm'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Conatainer',
            component: Container
        },
        {
            path: '/algorithm/:id',
            name: 'Algorithm',
            component: Algorithm
        },

    ]
})