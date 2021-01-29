<template>
    <div class="vuex">
        <p>{{ $store.state.refData.name }}</p>
        <p>{{ $store.state.refData.age }}</p>
        <p>{{ $store.state.refData.job }}</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.vuex {
    padding: 10px;
}
</style>