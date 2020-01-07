<template>
    <div>
        <div class="ui secondary pointing fixed menu" style="padding-top: 15px;">
            <div class="item">
                <h2 class="header">Diego Dias Pereira</h2>
            </div>
            <div class="right menu">
                <div class="item">
                    <h1 class="header" @click="visibleMobileMenu = !visibleMobileMenu">
                        <i class="bars icon"></i>
                    </h1>
                </div>
            </div>
        </div>
        <div class="ui left fixed vertical secondary pointing menu" v-if="visibleMobileMenu">
            <options-menu @clickItem="clickItem" />
        </div>
    </div>
</template>

<script>
import OptionsMenu from './OptionsMenu'

export default {
    name: 'MobileMenu',

    components: {
        OptionsMenu
    },

    data(){
        return {
            visibleMobileMenu: false
        }
    },

    methods: {
        clickItem: function(value){
            var positionEl = $('#' + value).position().top
            $("html, body").animate({scrollTop:positionEl - 70}, 'slow')
            this.visibleMobileMenu = !this.visibleMobileMenu
        }
    }
}
</script>

<style>
    .ui.secondary.menu {
        background: white !important;
    }
</style>