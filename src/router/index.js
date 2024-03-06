import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EventView from '@/views/EventView.vue'
import CustomerView from '@/views/CustomerView.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path:"/", name:"home", component:HomeView},
        { path:"/event", name:"event", component:EventView},
        { path:"/customer", name:"customer", component:CustomerView},
    ]
})