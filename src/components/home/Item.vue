<template>

                <li class="media category col-md-3" >
                    <a href="/tags/text-analysis" >
                        <div class="media-left" ><img src="@/assets/images/categories/text-analysis.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                        <h4 class="media-heading" >{{title}}</h4>
                        <p >{{desc}}</p>
                        </div>
                    </a>
                </li>



</template>
<script>
export default {
    name: 'Item',
    props:{
        title:String,
        img:String,
        desc:String

    }
}
</script>
<style scoped>
.media-body{
    font-size: 500
}

</style>
