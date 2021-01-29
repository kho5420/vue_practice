<template>
    <div id="app">
        <button @click="$router.push('/')">Home</button>
        <button @click="$router.push('/axios')">Axios</button>
        <button @click="$router.push('/emit')">Emit</button>
        <button @click="$router.push('/event')">Event</button>
        <button @click="$router.push('/mixin')">Mixin</button>
        <button @click="$router.push('/ref')">Ref</button>
        <button @click="$router.push('/routing')">Routing</button>
        <button @click="$router.push('/vuex')">Vuex</button>
        <button @click="$router.push('/watch')">Watch</button>
        <button @click="$router.push('/computed')">Computed</button>
        <button @click="$router.push('/vueapi')">VueApi</button>
        <button @click="$router.push('/nexttick')">nextTick</button>
        <button @click="$router.push('/select2')">Select2</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
    text-align: center;
    float: left;
}
</style>