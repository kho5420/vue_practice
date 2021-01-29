<template>
    
</template>

<script>
export default {
    mounted(){
        this.apitest();
    },
    methods: {
        apitest: async function(){
            try{
                const res = await this.$axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=true&limit=30", {
                    headers: {
                        Authorization: "3b17176f2eb5fdffb9bafdcc3e4bc192b013813caddccd0aad20c23ed272f076_1423639497",
                    }
                })
                console.log(res);
            } catch(error){
                console.log(error);
            }
        }
    }
}
</script>