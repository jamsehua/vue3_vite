<template>
  <div>
    {{ $store.state.count }}
    <div @click="handleAdd">add</div>
    {{ comAdd }}
    this is demo
    <a-table></a-table>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { mapState } from 'vuex'
import store from '@/store/index.ts';
export default {
  setup() {
    const handleAdd = () => {
      store.commit('SET_COUNT')
    }
    const comAdd = computed({
      get: () => {
        return store.count;
      },
      set: (path) => {
        store.SET_COUNT();
      },
    });
    return {
      handleAdd,
      comAdd
    }
  }
}
</script>

<style scoped>

</style>