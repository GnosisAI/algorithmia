<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <Types/>
        <Algorithms/>
      </div>
    </div>
</template>
<script>

import Search from './Search.vue'
import Types from './Types.vue'
import Algorithms from './Algorithms.vue'

 
export default {
  name: 'Container',
  components:{
    Search,
    Types,
    Algorithms
  }
}
</script>

<style scoped>

</style>
