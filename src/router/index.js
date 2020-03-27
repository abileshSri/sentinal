import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: "history",
    base: "/sentinal/",
    routes: [
        {
            path: '/homepage',
            name: 'Homepage',
            component: () => import("@/pages/homepage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },
        {
            path: '/falconview',
            name: 'falconview',
            component: () => import("@/pages/falconpage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },
        {
            path: '/trendline',
            name: 'trendline',
            component: () => import("@/pages/trendlinepage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },

        {
            path: '/decible',
            name: 'decible',
            component: () => import("@/pages/deciblepage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },
        {
            path: '/deepdive',
            name: 'deepdive',
            component: () => import("@/pages/deepdivepage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },
        {
            path: '/masters',
            name: 'masters',
            component: () => import("@/pages/masterpage.vue"),
            meta: {
                layout: "sidebar",
                adminOnly: true,
            },
        },
    ]
});
