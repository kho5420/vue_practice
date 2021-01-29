<template>
    <div class="watch">
        <select v-model="selected">
            <option value="brandi">브랜디</option>
            <option value="hiver">하이버</option>
            <option value="helpi">헬피</option>
        </select>
        <p><img v-bind:src="selectedObject.imgSrc"></p>
        <p>{{ selectedObject.titleData }}</p>
        <p>{{ selectedObject.text }}</p>
    </div>
</template>

<script>
export default {
    mounted(){
        this.selectedObject = this.options['brandi']
    },
    data: function(){
        return {
            selected: "brandi",
            selectedObject: {},
            options: {
                brandi: {
                    imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
                    titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
                    text: "www.brandi.co.kr"
                },
                hiver: {
                    imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
                    titleData: "하이버 - 예쁜 남자옷 모음",
                    text: "www.hiver.co.kr"
                },
                helpi: {
                    imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
                    titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
                    text: "www.helpi.co.kr"
                }
            }
        }
    },
    watch: {
        selected: function(value){
            this.selectedObject = this.options[value]
        }
    }
}
</script>

<style scoped>
.watch {
    padding: 10px;
}

.watch select {
    width: 100px;
}

.watch img {
    width: 250px;
    height: 250px;
}
</style>