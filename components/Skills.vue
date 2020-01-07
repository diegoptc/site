<template>
    <div class="ui stackable grid">
        <div class="row">
            <div class="six wide column">
                <h2 class="ui header">
                    Habilidades
                    <div class="sub header">
                        Essas habilidades foram adquiridas durante vários 
                        projetos, estudos, cursos e afins. Com novas tecnologias
                        surgindo constantemente, essa lista está sempre atualizando.
                    </div>
                </h2>
            </div>
            <div class="ten wide column">
                <div class="row" v-for="(skill, key) in skills" :key="key" style="margin-bottom: 15px;">
                    <div class="column">
                        <h4 class="ui header">
                            {{ skill.descricao }}
                            <div class="sub header">
                                <span v-for="(item, index) in skill.relacionados" :key="index">
                                    {{ item }}<span v-if="index < skill.relacionados.length - 1">,</span>
                                </span>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
    name: 'Skills',

    data(){
        return {
            skills: {}
        }
    },

    created(){
        firebase.firestore().collection("website").doc("skills").get()
        .then((snapshot) => {
            this.skills = snapshot.data()
        })
    }
}
</script>

<style scoped>
    span {
        text-transform: capitalize;
    }
</style>