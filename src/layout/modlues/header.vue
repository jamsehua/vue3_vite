<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <img src="../../assets/img/enjoy.jpeg" alt="">
    </a-layout-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
  }
})
</script>

<style lang="less" scoped>
.ant-layout-header {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>