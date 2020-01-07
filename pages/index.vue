<template>
    <div>
        <div class="ui grid">
            <div class="row">
                <div class="computer tablet only column">
                    <desktop-menu />
                </div>
                <div class="mobile only column">
                    <mobile-menu />
                </div>
            </div>
            <div class="ui container">
                <div class="ui stackable grid" style="margin-top: 75px;">
                    <div class="row" id="apresentacao">
                        <div class="six wide column">
                            <img src="../static/foto.jpg" alt="Foto" class="ui circular medium image centered" />
                        </div>
                        <div class="ten wide column">
                            <about />
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
</style>