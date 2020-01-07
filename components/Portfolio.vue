<template>
    <div>
        <div class="ui stackable grid">
            <div class="row">
                <div class="six wide column">
                    <h2 class="ui header">
                        Portfolio
                        <div class="sub header">
                            Esses são projetos que eu desenvolvi ou participei. A maioria deles foram
                            projetos freelancer e por isso não posso divulgar o código. Porém os que são
                            open source tem o link referente ao repositorio.
                        </div>
                    </h2>
                </div>
                <div class="ten wide column">
                    <div class="row" v-for="(project, key) in portfolio" :key="key" style="margin-bottom: 25px;">
                        <div class="column">
                            <h4 class="ui header" style="margin-bottom: 5px;">
                                <div v-if="project.link">
                                    <a :href="project.link" target="_blank">{{ project.nome }}</a>
                                </div>
                                <div v-else>
                                    {{ project.nome }}
                                </div>
                                <div class="sub header">
                                    {{ project.descricao }}
                                </div>
                            </h4>
                            <div class="ui label" v-for="(item, index) in project.ferramentas" :key="index" style="margin-bottom: 5px;">
                                {{ item }}
                            </div>
                            <div v-if="project.link">
                                <i class="github icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
    name: 'Portfolio',

    data(){
        return{
            portfolio: {}
        }
    },
    
    created(){
        firebase.firestore().collection("website").doc("portfolio").get()
        .then((snapsot) => {
            this.portfolio = snapsot.data()
        })
    }
}
</script>

<style>

</style>