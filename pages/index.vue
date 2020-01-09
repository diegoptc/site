<template>
    <div>
        <div class="ui grid">
            <div class="row" v-if="!printCV">
                <div class="computer tablet only column">
                    <desktop-menu />
                </div>
                <div class="mobile only column">
                    <mobile-menu />
                </div>
            </div>
            <div class="ui container">
                <div class="ui stackable grid" style="margin-top: 10px;" :class="printCV ? '' : 'escapeMenu'">
                    <div class="row" id="apresentacao">
                        <div class="six wide column">
                            <img src="../static/foto.jpg" alt="Foto" class="ui circular medium image centered" />
                        </div>
                        <div class="ten wide column">
                            <about />
                        </div>
                    </div>
                    <div class="two columns row centered" v-if="!printCV">
                        <div class="ui buttons">
                            <button class="ui button" @click="downloadCV">Download CV</button>
                            <a class="ui red button" href="mailto:diegodiasptc@gmail.com">Contato</a>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="row" id="habilidades">
                        <div class="column">
                            <skills/>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="row" id="experiencias">
                        <div class="column">
                            <experiences/>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="row" id="cursos">
                        <div class="column">
                            <courses/>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="row" id="portifolio">
                        <div class="column">
                            <portfolio />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DesktopMenu from '../components/Menu/DesktopMenu'
import MobileMenu from '../components/Menu/MobileMenu'
import About from '../components/About'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import Courses from '../components/Courses'
import Portfolio from '../components/Portfolio'

export default {
    name: 'index',

    components: {
        DesktopMenu,
        MobileMenu,
        About,
        Skills,
        Experiences,
        Courses,
        Portfolio
    },

    data(){
        return {
            printCV: false
        }
    },

    methods: {
        downloadCV: function(){
            window.open('https://firebasestorage.googleapis.com/v0/b/website-curriculo.appspot.com/o/Diego%20Dias.pdf?alt=media&token=a4d9c43a-6ffd-444d-8352-8faf9412d979')
        }
    }
}


</script>

<style scoped>
    @media (max-width: 767px)
    {
        .ui.container {
            margin-left: 3em !important;
            margin-right: 3em !important;
        }
    }

    .escapeMenu {
        margin-top: 75px !important;
    }
</style>