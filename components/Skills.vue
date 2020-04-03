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
                <div class="row" v-for="(skill, index) in skillsSorted" :key="index" style="margin-bottom: 15px;">
                    <div class="column">
                        <h4 class="ui header">
                            {{ skills[skill].descricao }}
                            <div class="sub header">
                                <span v-for="(item, index) in skills[skill].relacionados" :key="index">
                                    {{ item }}<span v-if="index < skills[skill].relacionados.length - 1">,</span>
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
            skills: {},
            skillsSorted: []
        }
    },

    created(){
        firebase.firestore().collection("website").doc("skills").get()
        .then((snapshot) => {
            this.skills = snapshot.data()
        })
    },

    watch: {
        skills: function() {
            this.skillsSorted = Object.keys(this.skills).sort((a,b) => {
                return this.skills[a].ordem - this.skills[b].ordem
            })
        }
    }
}
</script>

<style scoped>
    span {
        text-transform: capitalize;
    }
</style>