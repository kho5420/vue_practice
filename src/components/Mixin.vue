<template>
    <div class="mixin">
        <p><img v-bind:src="brandi.imgSrc"></p>
        <p>{{ brandi.titleData }}</p>
        <p>{{ brandi.text }}</p>
    </div>
</template>

<script>
import mixin from "../mixin/mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        this.cardClick()
    }
}
</script>

<style scoped>
.mixin img{
    width: 250px;
    height: 250px;
}
</style>