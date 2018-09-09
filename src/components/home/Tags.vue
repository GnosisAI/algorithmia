<template>
    <div class="top-tags" >
                          <div ><label >Tags</label></div>

            <ul class="tag-list" >
                <li class="tag-item tag-pills" v-for="(tag, index) in tags" :key="index">
                    <a href="/tags/utilities" title="Ready to use microservices"
                    ><span >{{tag}}</span></a>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name: 'Tags',
    props:{
        tags:Array
    }
}
</script>



<style scoped>

</style>