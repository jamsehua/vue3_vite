<template>
  <component :is="menuComponent" :routeChildren="routeChildren" :item="item">
    <template v-if="item.children">
      <!-- {{ item.children }} -->
      <MenuList v-for="rou in item.children" :key="rou.path" :item="rou"></MenuList>
    </template>
  </component>
</template>

<script lang="ts">
import SubItem from './mudules/subItem.vue';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import MenuItem from './mudules/menuItem.vue';

export default defineComponent({
  name: 'MenuList',
  components: {
    SubItem,
    MenuItem
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    // console.log(props.item);
    const menuComponent = ref('');
    let routeChildren = reactive({
      chil: {}
    });
    const handleShowChilren = (item) => {
      if(item?.children?.length > 0) {
        return item.children
      }
      return []
    }
    const showChildren = handleShowChilren(props.item)
    // console.log({showChildren});
    if(showChildren?.length > 0) {
      menuComponent.value = 'SubItem'
      routeChildren.chil = showChildren
    } else {
      menuComponent.value = 'MenuItem'
      routeChildren.chil = props.item
    }
    const handleClick = () => {
      console.log('daf');
    }
    return {
      menuComponent,
      routeChildren,
      handleClick
    }
  }
})
</script>

<style lang="less">

</style>