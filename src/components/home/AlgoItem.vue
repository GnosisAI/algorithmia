<template>

        <div class="algo-list-wrapper">
            <div class="algo-avatar">
                <a href="/users/keshavashiya" alt="">
                <img src="https://cdn0.iconfinder.com/data/icons/web-and-apps-develop/512/coding_php_code_html_programming_web_java_script_editor_website_development_css_build_program_flat_design_icon-512.png" class="avatar">
                </a>
            </div> 
            <div class="algo-info">
                <div>
                    <a href="/algorithms/keshavashiya/Hello" class="algo-list-link">
                    <span class="algo-info__name">{{title}}</span>
                    </a> 
                    <p class="algo-url">{{id}}</p> 
                    <p class="algo-list-body">{{desc}}</p>
                </div> 
            </div>
            <hr>
        </div>

</template>
<script>
export default {
    name: 'AlgoItem',
    props:{
        title:String,
        id:String,
        desc:String

    }
}
</script>