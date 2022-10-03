import {createRouter, createWebHashHistory} from "vue-router";
import AdminPage from "@/components/AdminPage";
import LoginPage from "@/components/common/LoginPage";


const routes = [
    {
        path: '/',
        component: AdminPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    if (to.path === '/login') return next();
    let token = localStorage.getItem("token");
    if (token){
        next()
    } else {
        return next('/login')
    }
})


export default router