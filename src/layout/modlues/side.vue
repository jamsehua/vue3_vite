<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible class="layout_sider">
    <div class="logo">
      <img src="../../assets/img/4.jpeg" alt="">
    </div>
    <a-menu
      theme="dark"
      v-model:openKeys="menuOpenKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
      @openChange="handleOpenChange"
    >
      <Menu v-for="route in routes" :key="route.path" :item="route"/>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref } from 'vue';
import { modulesRouter } from '@/router/index'
import { cloneDeep } from 'lodash'
import Menu from '../menu/index.vue'
import { addParentKeyWrapper } from '../../util'

export default defineComponent({
  components: {
    Menu,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  setup () {
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>(['1'])
    const menuOpenKeys = ref([]) // 打开的menu
    const handleClick = ({item, key, keyPath}) => { // 点击item项触发
      const haveParentkey = addParentKeyWrapper(modulesRouter);
      const result = flattenTreeDataClosure(haveParentkey);
      const openKey = findParent(key, result)
      !collapsed.value && (menuOpenKeys.value = openKey)
    }

    const handleOpenChange = (openKeys) => { // 点击menu触发
      const chooseMenu = openKeys[openKeys?.length - 1];
      const haveParentkey = addParentKeyWrapper(modulesRouter);
      const result = flattenTreeDataClosure(haveParentkey);
      const openKey = findParent(chooseMenu, result)
      menuOpenKeys.value = openKey
    }

    function flattenTreeDataClosure(data){ // 扁平化路由
      const treeData = JSON.parse(JSON.stringify(data));
      const flattenData = [];
      function flattenTree(data, parentKey) {
        data.forEach(ele => {
          const { path, children } = ele;
          flattenData.push({ path, parentKey });
          if (children){
            flattenTree(children, path);
          }
        })
      }
      flattenTree(treeData, null);
      return flattenData;
    }
    function findParent(item, flattenTree){ // 查找父节点
      const parentArr = []; // 存储所有的父级元素
      function find(item, flattenTree) {
        flattenTree.forEach(ele => {
          if (ele.path === item){
            parentArr.unshift(ele.path);
            find(ele.parentKey, flattenTree);
          }
        })
      }
      find(item, flattenTree);
      return parentArr;
    }

    return {
      collapsed,
      selectedKeys,
      routes: cloneDeep(modulesRouter),
      menuOpenKeys,
      handleClick,
      handleOpenChange,
    }
  }
});
</script>
<style lang="less">
.layout_sider {
  background: #2f5777;
  .ant-layout-sider-trigger {
    background: #134e86;
  }
  .logo {
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
