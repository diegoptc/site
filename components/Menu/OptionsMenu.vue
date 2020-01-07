<template>
    <div class="item">
        <a class="item" v-for="item in options" :key=item.descricao  @click="clickItem(item.url)" :id="'item' + item.url">{{ item.descricao }}</a>
    </div>
</template>

<script>
export default {
    name: 'Optionsmenu',

    methods: {
        clickItem: function(url){
            this.$emit("clickItem", url)
        }
    },

    data(){
        return {
            options: [
                {
                    "descricao": "Apresentação",
                    "url": "apresentacao"
                },
                {
                    "descricao": "Habilidades",
                    "url": "habilidades"
                },
                {
                    "descricao": "Experiências",
                    "url": "experiencias"
                },
                {
                    "descricao": "Cursos",
                    "url": "cursos"
                },
                {
                    "descricao": "Portifolio",
                    "url": "portifolio"
                }
            ]
        }
    }
}
</script>

<style>
</style>