<template>
    <div>
        <div class="ui grid">
            <div class="row">
                <div class="column">
                    <h2 class="ui header">Diego Dias Pereira, {{idade}} anos</h2>
                    <p>
                        {{ about.descricao }}
                    </p>
                    <h4 class="ui header">
                        Email: 
                        <div class="sub header">
                            <a :href="'mailto:'+about.email" target="_blank">{{ about.email }}</a>
                        </div>
                    </h4>
                    <h4 class="ui header">
                        Telefone / Whatsapp:
                        <div class="sub header">
                            <a :href="'https://wa.me/'+about.whatsapp" target="_blank">{{ about.telefone }}</a>
                        </div>
                    </h4>
                    <h4 class="ui header">
                        Site:
                        <div class="sub header">
                            <a :href="about.site">{{about.site}}</a>
                        </div>    
                    </h4>
                    <h4 class="ui header">
                        LinkedIn:
                        <div class="sub header">
                            <a :href="about.linkedin" target="_blank">{{ about.linkedin }}</a>
                        </div>
                    </h4>
                    <h4 class="ui header">
                        Github:
                        <div class="sub header">
                            <a :href="about.github" target="_blank">{{ about.github }}</a>
                        </div>
                    </h4>
                    <h4 class="ui header">
                        Lattes:
                        <div class="sub header">
                            <a :href="about.lattes" target="_blank">{{ about.lattes }}</a>
                        </div>
                    </h4>
                    <h4 class="ui header">Endereço:
                        <div class="sub header">
                            {{ about.endereco }}
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
    name: 'About',

    data(){
        return {
            about: {},
            idade: 0
        }
    },

    created(){
        firebase.firestore().collection("website").doc("about").get()
        .then((snapshot) => {
            this.about = snapshot.data()
        })

        var hoje = new Date();
        if(hoje.getMonth() < 4){
            this.idade = hoje.getFullYear() - 1998 - 1
        }else{
            if(hoje.getMonth() == 4){
                if(hoje.getDate() >= 4){
                    this.idade = hoje.getFullYear() - 1998
                }else{
                    this.idade = hoje.getFullYear() - 1998 - 1
                }
            }else{
                this.idade = hoje.getFullYear() - 1998
            }
        }
        
        
    }
}
</script>

<style>

</style>