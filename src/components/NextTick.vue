<template>
    <div class="nextTick">
        height: {{ boxSize.height }}, width: {{ boxSize.width }}
        <button v-on:click="addText">텍스트 추가하기</button>
        <button v-on:click="getBoxSize">상자크기 가져오기</button>

        <div id="textBox" ref="textBox">
            <div class="items" v-for="(item, index) in items" v-bind:key="index">
                {{ "random str = " + item }} <button v-on:click="btnDelete(index)">제거</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            boxSize: {
                height: 0,
                width: 0
            },
            items: [],
            chars: "abcdefghijklmnopqrstuvwxyz0123456789"
        }
    },
    methods: {
        addText: function(){
            let randomNum = this.getRandomNum(1, 15)

            this.items.push(this.getRandomText(randomNum))
            this.getBoxSize()
        },
        getBoxSize: function(){
            this.$nextTick(function(){
                this.boxSize.width = this.$refs.textBox.clientWidth;
                this.boxSize.height = this.$refs.textBox.clientHeight;
            })
        },
        setBoxSize: function(){

        },
        getRandomText: function(length){
            let text = ""
    
            for (let i = 0; i < length; i++) {
				text += this.chars.charAt(Math.floor(Math.random() * this.chars.length))
            }

			return text
        },
        getRandomNum: function(min, max){
            let num = Math.floor(Math.random() * (max - min + 1)) + min
            return num
        },
        btnDelete: function(index){
            this.items.splice(index, 1)
            this.getBoxSize()
        }
    }
}
</script>

<style scoped>
.nextTick {
    padding-top: 10px;
    text-align: left;
}

#textBox {
    margin-top: 5px;
    border: 1px solid gray;
    display: table;
}
</style>