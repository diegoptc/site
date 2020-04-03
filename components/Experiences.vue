<template>
    <div>
        <div class="ui stackable grid">
            <div class="row">
                <div class="six wide column">
                    <h2 class="ui header">
                        Experiências
                        <div class="sub header">
                            Aqui falo um pouco sobre as minhas experiências de trabalho.
                        </div>
                    </h2>
                </div>
                <div class="ten wide column">
                    <div class="ui grid">
                        <div class="row" v-for="(experience, index) in experiencesSorted" :key="index">
                            <div class="three wide column">
                                <img :src="experiences[experience].logo" :alt="'Logo ' + experience" class="ui medium circular image">
                            </div>
                            <div class="thirteen wide column">
                                <h4 class="ui header">
                                    {{ experiences[experience].empresa }} - {{ experiences[experience].cargo }}
                                    <br>
                                    {{ experiences[experience].tempo }}
                                    <div class="sub header">
                                        {{ experiences[experience].descricao }}
                                    </div>
                                </h4>
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
    name: 'Experiences',

    data(){
        return {
            experiences: {},
            experiencesSorted: []
        }
    },

    created(){
        firebase.firestore().collection("website").doc("experiences").get()
        .then((snapshot) => [
            this.experiences = snapshot.data()
        ])
    },

    watch: {
        experiences: function() {
            this.experiencesSorted = Object.keys(this.experiences).sort((a,b) => {
                return this.experiences[a].ordem - this.experiences[b].ordem;
            })
        }
    }
}
</script>

<style>

</style>