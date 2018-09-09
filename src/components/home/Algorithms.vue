<template>
<div class="col-md-12" >
            <h3 class="mb-32" >Browse all algorithms:</h3>
            <div >
              <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a role="tab"><i class="fa fa-star"></i> Top Rated</a></li>
                <li role="presentation"><a role="tab"><i class="fa fa-arrow-circle-o-down"></i> Most Called</a></li>
                <li role="presentation"><a role="tab"><i class="fa fa-clock-o"></i> Recently Added</a></li>
              </ul>
              <div class="tab-content">
                <div id="top-rated-algorithms" role="tabpanel" class="tab-pane active" style="display:;">
                  <div >
                    <!---->
                    <div class="pv-32 loading"  v-if="!show">
                      <span class="mr-8" ><i class="aspinner"></i></span>
                      <span class="pb-8" >Loading...</span>
                    </div>
                    <div v-if="show">
                      <algo-item v-for="algo in algorithmsList" :key="algo.id" v-bind="algo" />
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="tab-content">
                <div id="most-called-algorithms" role="tabpanel" class="tab-pane active" style="display:none;">
                  <div >
                    <!---->
                    <div class="pv-32 loading" ><span class="mr-8" ><i class="aspinner"
                          ></i></span><span class="pb-8" >Loading...</span></div>
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>

              <div class="tab-content">
                <div id="recent-algorithms" role="tabpanel" class="tab-pane active" style="display:none;">
                  <div >
                    <!---->
                    <div class="pv-32 loading" ><span class="mr-8" ><i class="aspinner"
                          ></i></span><span class="pb-8" >Loading...</span></div>
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>


</template>
<script>
import AlgoItem from './AlgoItem'
export default {
  name: 'Algorithms',
  components:{
    AlgoItem
  },
  created(){
    this.$store.dispatch('getAlgos');
  },
  computed:{
    algorithmsList(){

      return this.$store.state.algorithms
    }
  },
  show:false,
  data(){
    this.show = true;
    return {
      algorithms:[
              {
                  id:"text-analysis",
                  title:"Text Analysis",
                  desc:"Make sense of unstructured text"
              },
                            {
                  id:"machine-learning",
                  title:"Machine Learning",
                  desc:"Teach your app to teach itself"
              },
                            {
                  id:"computer-vision",
                  title:"Computer Vision",
                  desc:"Identify objects in images"
              },
                            {
                  id:"deep-learning.",
                  title:"Deep Learning",
                  desc:"Learn from your data"
              }          
      ]
    }
  }

}
</script>


<style scoped>

</style>