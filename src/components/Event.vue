<template>
    <div class="event">
        <div>
            Key Event
            <p><input type="text" v-on:keyup="inputText" placeholder="input event"></p>
            <p>{{text}}</p>
            <p>{{keyCode}}</p>
        </div>
        <div>
            Mouse Event
            <p><div class="pointBox" v-bind:style="boxStyle" v-on:mousemove="mouseMove" v-on:mouseleave="mouseLeave"></div>
            <p>{{mouseX}}</p>
            <p>{{mouseY}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            text: "",
            keyCode: [],
            mouseX: 0,
            mouseY: 0,
            boxStyle: {
                borderColor: "black"
            }
        }
    },
    methods: {
        inputText: function(e){
            if (e.keyCode == 8){
                this.keyCode.pop(e.keyCode);
            }else if ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 91)) {
                this.keyCode.push(e.keyCode);
            }
        },
        mouseMove: function(e){
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
            this.boxStyle.borderColor = "red";
        },
        mouseLeave: function(e){
            this.boxStyle.borderColor = "black";
        }
    }
}
</script>

<style scoped>
.event {
    padding-top: 10px;
}

.event div {
    float: left;
    padding-left: 20px;
}

.pointBox {
    width: 200px;
    height: 200px;
    border: solid black 1px;
}
</style>