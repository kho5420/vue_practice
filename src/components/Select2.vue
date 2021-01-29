<template>
    <div class="select2">
        <input type="text" v-on:input="inputText=$event.target.value" 
        v-model="inputText" v-on:focus="onFocus" v-on:blur="onBlur" placeholder="입력하세요">
        <div class="items">
            <div v-for="(option, key) in options" v-on:click="optionClick(key)" v-bind:key="key" v-show="optionDisplay(option)">
                {{ option.name }}
            </div>
        </div>
        <p><img v-bind:src="selectedObject.imgSrc"></p>
        <p>{{ selectedObject.titleData }}</p>
        <p>{{ selectedObject.text }}</p>
    </div>
</template>

<script>
export default {
    name: "select2",
    mounted(){
    },
    data: function(){
        return {
            inputText: "",
            focused: false,
            selectedObject: {},
            options: {
                brandi: {
                    name: "브랜디",
                    imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
                    titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
                    text: "www.brandi.co.kr"
                },
                hiver: {
                    name: "하이버",
                    imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
                    titleData: "하이버 - 예쁜 남자옷 모음",
                    text: "www.hiver.co.kr"
                },
                helpi: {
                    name: "헬피",
                    imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
                    titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
                    text: "www.helpi.co.kr"
                }
            }
        }
    },
    methods: {
        onFocus: function(){
            this.focused = true
        },
        onBlur: function(){
            setTimeout(()=>{
                this.focused = false
            }, 300)
        },
        optionClick: function(value){
            this.focused = false
            this.inputText = this.options[value].name
            this.selectedObject = this.options[value]
        },
        optionDisplay: function(option){
            if (!this.focused) return
            if (option.name.indexOf(this.inputText) >= 0){
                return true
            }
        }
    },
}
</script>

<style scoped>
.select2 {
    position: relative;
    width: 20%;
    text-align: left;
    height: 50px;
    line-height: 20px;
}

.select2 .items {
    border: 1px solid black;
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
}

.select2 .items div {
    padding-left: 5px;
    cursor: pointer;
}

.select2 .items div:hover {
    background-color: #7596c2;
}

.select2 img {
    width: 250px;
    height: 250px;
    border: 0;
    border-collapse: collapse;
}
</style>