<template>
    <div id="routing">
        <button @click="$router.push('/')">Home</button>
        <button @click="$router.go(-1)">Back</button>
        <button @click="$router.go(1)">Front</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#routing {
    padding: 10px;
}
</style>