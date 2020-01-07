<template>
    <div class="ui secondary pointing fixed menu">
        <div class="item">
            <h2 class="header">Diego Dias Pereira</h2>
        </div>
        <div class="right menu">
            <options-menu @clickItem="clickItem"/>
        </div>
    </div>
</template>

<script>
import OptionsMenu from './OptionsMenu'

export default {
    name: 'DesktopMenu',

    components: {
        OptionsMenu
    },

    methods: {
        clickItem: function(value){
            var positionEl = $('#' + value).position().top
            $("html, body").animate({scrollTop:positionEl - 70}, 'slow')
        }
    }
}
</script>

<style>

</style>