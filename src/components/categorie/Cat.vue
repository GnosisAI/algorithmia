<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <CatDesc :title="getTitle"/>
        <Algorithms/>
      </div>
    </div>
</template>
<script>

import Search from '../home/Search.vue'
import Algorithms from '../home/Algorithms.vue'
import CatDesc from './CatDesc.vue'

 
export default {
  name: 'cat',
  components:{
    Search,
    CatDesc,
    Algorithms
  },
    data(){
    return{
    }
  },
  computed:{
    getTitle(){
      return this.$route.params.name
    }
  }
}
</script>

<style scoped>

</style>
