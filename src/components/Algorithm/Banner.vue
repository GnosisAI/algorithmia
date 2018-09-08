<template lang="html">

  <section class="banner">
    <div class="container">

      <div class="row" >
         <div class="col-md-7" >
            <div class="row" >
               <div class="col-md-12" >
                  <h2 >
                     <span style="display:;" >Colorful Image Colorization</span> <!----> <!---->
                  </h2>
               </div>
               <div class="col-sm-12" >
                  <p class="lead" >Colorizes given black &amp; white images.</p>
               </div>

               <div class="col-sm-12 algo-run--tags" >
                <Tags/>
               </div>
               <div class="col-sm-12 algo--permissions" >
                  <div ><label >Description</label></div>
                  <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte </p>
              </div>
               <div class="col-sm-12 algo--permissions" >
                  <div ><label >Permissions</label></div>
                  <!----> <span >Copyright ©</span> <span >
                  · <a id="internet-popover-target" >MIT Licence</a> <span style="display:none;" ><span ></span></span></span> <span >
                  · <a id="calls-other-popover-target" >Open Source</a> <span style="display:none;" ><span ></span></span></span> <!----> <br > <!---->
               </div>
            </div>
         </div>
         <div class=" hidden-sm hidden-xs text-center" >
           <img src="https://s3.amazonaws.com/algorithmia-assets/algo_desc_images/deeplearning_ColorfulImageColorization/colorful_image_colorization_description_image.png" class="col-md-5" >
         </div>
      </div>
    </div>
    <br>

  </section>

</template>

<script lang="js">
import Tags from '../home/Tags'
  export default  {
    name: 'banner',
    props: [],
    components:{
      Tags
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .banner {

  }
</style>
