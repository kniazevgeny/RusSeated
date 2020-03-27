// Dependencies
import Vue from 'vue'
import Router from 'vue-router'
import home from '.././views/Home.vue'
import Tell from '.././views/Tell.vue'
import Stories from '.././views/Stories.vue'
import notFound from '.././views/NotFound.vue'
import * as store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/stories',
            name: 'stories',
            component: Stories,
        },
        {
            path: '/tell',
            name: 'tell',
            component: Tell,
        },
        /*        {
                    path: '*',
                    name: 'notFound',
                    component: notFound,
                }*/
    ],
})

router.beforeEach((to, _, next) => {
    //next()
    if (to.path === '/') {
        store.setDark(true);
    } else {
        store.setDark(false);
    }
    console.log(store.dark());
    next()
})


export default router
