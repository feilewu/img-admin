import {createRouter, createWebHashHistory} from "vue-router";
import AdminPage from "@/components/AdminPage";
import LoginPage from "@/components/common/LoginPage";
import UploadPage from "@/components/common/UploadPage";


const routes = [
    {
        path: '/',
        component: AdminPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/upload',
        component: UploadPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    if (to.path === '/login') return next();
    let token = localStorage.getItem("token");
    if (token){
        const lastSetTime = localStorage.getItem("tokenSetTime")
        if (new Date().getTime() - parseInt(lastSetTime) > 29*60*1000) {
            localStorage.clear()
            return next('login')
        }
        next()
    } else {
        return next('/login')
    }
})


export default router