import { createRouter, createWebHistory } from 'vue-router';
import asyncHome from './modules/asyncHome'
import defaultRouter from './modules/defaultRouter'
import { AppRouteRecordRaw } from "@/router/types";

export const modulesRouter:AppRouteRecordRaw[] = [asyncHome, defaultRouter]
// console.log({modulesRouter});
export const flatRoute:AppRouteRecordRaw[] = [];
function filterRouterChil(async) { // 处理所有路由
  async.map(router => {
    finallyRouter(router)
  })
}
function finallyRouter (router) { // 路由扁平化
  router?.children.map(item => {
    if(item?.children) {
      finallyRouter(item)
      return
    }
    flatRoute.push(item)
  })
}
filterRouterChil(modulesRouter)
// console.log({flatRoute});

const routes = [
  {
    path: "/",
    meta: {
      title: "main",
    },
    component: () => import("@/layout/index.vue"),
    // redirect: "/homeDetail",
    children: [...flatRoute]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
