<template>
  <a-sub-menu :key="item.path">
    <template #title>
      <span>
        <!-- <user-outlined /> -->
        <span>{{item.meta.title }}</span>
      </span>
    </template>
    <!-- <a-menu-item key="3" @click="handlePush(2)">Tom</a-menu-item> -->
    <slot></slot>
  </a-sub-menu>
</template>

<script  lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
  props: {
    item: {
      type: Object
    }
  },
  setup(props) {
    // console.log(props.item);
    
  }
})
</script>

<style lang="less" scoped>

</style>