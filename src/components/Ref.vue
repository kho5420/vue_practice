<template>
    <div id="ref">
        <p><input type="text" placeholder="이름" ref="name" v-model="inputData.name"></p>
        <p><input type="text" placeholder="나이" ref="age" v-model="inputData.age"></p>
        <p><input type="text" placeholder="직업" ref="job" v-model="inputData.job"></p>
        <p><button type="button" v-on:click="btnOk">확인</button></p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            inputData: {
                name: "",
                age: "",
                job: ""
            }
        }        
    },
    methods: {
        btnOk: function(){
            if (this.inputData.name.length == 0){
                this.$refs.name.focus()
            } else if (this.inputData.age.length == 0){
                this.$refs.age.focus()
            } else if (this.inputData.job.length == 0){
                this.$refs.job.focus()
            } else {
                this.$store.dispatch('saveData', this.inputData)
                alert("모두 입력되었습니다.")
            }
        }
    }
}
</script>

<style scoped>
#ref {
    padding: 10px
}
</style>