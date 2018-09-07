<template lang="html">

  <section class="algorithm">
    
    <h1>algorithm Component</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <console/>
        </div>
        <div class="col-md-6">
              <console/>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Console from './Console.vue'

  export default  {
    name: 'algorithm',
    components:{
      Console
    },
    
}
</script>

<style scoped lang="css">
  .algorithm {

  }
</style>
