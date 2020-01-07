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
                        <div class="row" v-for="(experience, key) in experiences" :key="key">
                            <div class="three wide column">
                                <img :src="experience.logo" :alt="'Logo ' + key" class="ui circular medium image">
                            </div>
                            <div class="thirteen wide column">
                                <h4 class="ui header">
                                    {{ experience.empresa }} - {{ experience.cargo }}
                                    <br>
                                    {{ experience.tempo }}
                                    <div class="sub header">
                                        {{ experience.descricao }}
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
            experiences: {}
        }
    },

    created(){
        firebase.firestore().collection("website").doc("experiences").get()
        .then((snapshot) => [
            this.experiences = snapshot.data()
        ])
    }
}
</script>

<style>

</style>