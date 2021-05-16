<script lang="jsx">
import { ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const handleClick = () => {
      counter.value++
    }
    return () => (
      <>
        <div onClick={ handleClick }>this is new Jsx</div>
        <p>{ counter.value }</p>
        {/*<router-link to="/home/com" tag="button">点击进入用户管理</router-link>
        <router-view /> */}
      </>
    )
  }
}
</script>

<style scoped>

</style>