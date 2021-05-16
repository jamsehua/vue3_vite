import RouterView from '@/layout/RouterView/index.vue'

export default {
  path: "/divider",
  name: "Com",
  meta: {
    title: "分割线",
    icon: "HomeOutlined",
  },
  component: RouterView,
  children: [
    {
      path: "/dividerList",
      name: "HomeCom",
      meta: {
        title: "分割线详情",
      },
      component: () => import(/* webpackChunkName: home */ "@/view/divider/index.vue")
    },
  ]
}