<template lang="html">

  <section class="algorithm">
    <div class="jumbotron">
      <h4 class="text-center"> <span>deeplearning/</span><strong>ColorfulImageColorization/</strong>{{ $route.params.id }}</h4>
    </div>


    <Banner/>
    <br>

    <div class="container">
      <div class="row">
          <div class="col-md-12" ><h2 >Run an Example</h2></div>
        <div class="col-md-6">
            <console title="INPUT"/>
        <div class="text-center">
                    <button v-on:click="log()" class="btn btn-accent btn-raised" >Run for Free</button>        
        </div>
        <br>
      </div>
        <div class="col-md-6">
              <console title="OUTPUT"/>
        </div>
      </div>
          <hr>
    <hr>

       <div class="list-group">
  <a href="#" class="list-group-item ">
    <h4 class="list-group-item-heading"><i class="fab fa-github-square fa-3x"></i>

Github</h4>
    <p class="list-group-item-text">...</p>
  </a>
    <a href="#" class="list-group-item ">
    <h4 class="list-group-item-heading"><i class="fab fa-kaggle fa-3x"></i>

Kaggle </h4>
    <p class="list-group-item-text">...</p>
  </a>
    <a href="#" class="list-group-item ">
    <h4 class="list-group-item-heading"><i class="fab fa-wikipedia-w fa-3x"></i>

Wiki</h4>
    <p class="list-group-item-text">read more about convolution...</p>
  </a>
</div>
    
    </div>
 
  </section>

</template>

<script lang="js">
import Console from './Console.vue'
import Banner from './Banner.vue'

  export default  {
    name: 'algorithm',
    components:{
      Console,
      Banner
      
    },    
    methods:{
      log() {
        console.log('hiii')
      }
    }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #fafafa;
  height: 70px;
}
h4{
  color: black;
  font-family: 'Rubik', sans-serif
}
.jumbotron span{
  color: #5000be
}
.btn-accent {
    color: rgba(0,0,0,.87);
    background-color: #50ffbe;
    border-color: #50ffbe;
}
</style>
