import RouterView from '@/layout/RouterView/index.vue'
export default {
  path: "/home",
  name: "Home",
  meta: {
    title: "首页",
    icon: "HomeOutlined",
  },
  component: RouterView,
  children: [
    {
      path: "/demo",
      name: "detailHome",
      meta: {
        title: "首页详情",
      },
      component: RouterView,
      children: [
        {
          path: "/homeDetail",
          name: "HomeDetail",
          meta: {
            title: "详情首页",
          },
          component: () => import(/* webpackChunkName: home */ "@/view/home/index.vue"),
        },
        {
          path: "/homeList",
          name: "HomeList",
          meta: {
            title: "模块页",
          },
          component: () => import(/* webpackChunkName: home */ "@/view/home/Com.vue"),
        },
      ]
    },
    {
      path: "/sanitation",
      name: "Sanitation",
      meta: {
        title: "测试页",
      },
      component: () => import(/* webpackChunkName: home */ "@/view/home/sanitation.vue")
    },
  ]
  }