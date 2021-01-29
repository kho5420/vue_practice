<template>
    <div>
        <table class="product">
            <thead>
                <tr>
                    <th>상품 번호</th>
                    <th>상품명</th>
                    <th>상품 가격</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in list" v-bind:key="i">
                    <td>{{item.no}}</td>
                    <td>{{item.productName}}</td>
                    <td>{{item.price | comma}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    mounted(){
        this.productList();
    },
    methods: {
        productList: async function(){
            try{
                const res = await this.$axios.get('../public/data.json')
                this.list = res.data;
            } catch(error){
                alert("error : " + error);
                console.log("Error : ", error);
            }
        }
        // productList: function(){
        //     this.$axios.get('../public/data.json')
        //     .then(res => {
        //         this.list = res.data;
        //     })
        //     .catch((error) => {
        //         console.log("Error : ", error)
        //     })
        // }
    },
    data: function(){
        return {
            list: []
        }
    },
    filters: {
        comma(val){
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style scoped>
.product{
    border: 1px solid black;
    border-collapse: collapse;
}
.product th{
    border: 1px solid black;
    border-collapse: collapse;
}
.product td{
    border: 1px solid black;
    border-collapse: collapse;
}
</style>