import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import MineRouter from './mine'
import cinemaROuter from './cinema'
Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        movieRouter,
        MineRouter,
        cinemaROuter
    ]

})
