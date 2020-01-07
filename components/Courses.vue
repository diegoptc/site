<template>
    <div>
        <div class="ui stackable grid">
            <div class="row">
                <div class="six wide column">
                    <h2 class="ui header">
                        Cursos
                        <div class="sub header">
                            Esses cursos são os que tem alguma relação acadêmica 
                            de graduação e pós-graduação. Estou sempre em busca de aprendizado
                            e por conta disso essa lista só aumentará.
                        </div>
                    </h2>
                </div>
                <div class="ten wide column">
                    <div class="row" v-for="(course, key) in courses" :key="key">
                        <div class="column">
                           <h4 class="ui header">
                               {{ course.titulacao }}
                               <div class="sub header">
                                   {{ course.local }}
                                   <br>
                                  {{ course.tempo }}
                               </div>
                           </h4>
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
    name: 'Courses',

    data(){
        return {
            courses: {}
        }
    },

    created(){
        firebase.firestore().collection("website").doc("courses").get()
        .then((snapshot) => {
            this.courses = snapshot.data()
        })
    }
}
</script>

<style>

</style>