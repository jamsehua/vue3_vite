<template>
  <a-layout style="min-height: 100vh">
    <Side />
    <a-layout>
      <Header />
      <Content/>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Side from './modlues/side.vue';
import Header from './modlues/header.vue';
import Content from './modlues/content.vue';
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Side,
    Content,
  },
  setup() {

  }
})

</script>
