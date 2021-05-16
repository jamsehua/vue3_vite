<template>
<div @click="handlePush(routeChildren)">
  <a-menu-item
    :key="routeChildren.path"
  >
    <!-- <pie-chart-outlined /> -->
    <span>{{ routeChildren.chil.meta.title }}</span>
  </a-menu-item>
</div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';

export default defineComponent ({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  props: {
    routeChildren: {
      type: Object
    }
  },
  setup(props) {
    const { push } = useRouter()
    const handlePush = (route) => {
      push(route?.chil?.path)
    }
    return {
      handlePush
    }
  }
})
</script>

<style lang="less" scoped>

</style>