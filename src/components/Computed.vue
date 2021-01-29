<template>
    <div class="computed">
        <div>
            <p>
                <input type="checkbox" @change="check('coupon')"> 쿠폰 할인 
                <input type="number" v-model="coupon.value" v-bind:disabled="coupon.disabled" :min="1000">
            </p>
            <p>
                <input type="checkbox" @change="check('normal')"> 일반 할인 
                <input type="number" v-model="normal.value" :min="1" v-bind:disabled="normal.disabled">
            </p>
            <p>
                <input type="checkbox" @change="check('event')"> 이벤트 할인 
                <input type="number" v-model="event.value" :min="1" v-bind:disabled="event.disabled">
            </p>
            <p>
                <input type="checkbox" @change="check('employee')"> 직원 할인 
                <input type="number" v-model="employee.value" :min="1" v-bind:disabled="employee.disabled">
            </p>
            <p> 원가 <input type="text" v-model="price"></p>
        </div>
        <div>
            <p><img v-bind:src="imgSrc"></p>
            <p v-if="!coupon.disabled"> 쿠폰 적용가 {{coupon.value | comma}}원</p>
            <p v-if="!normal.disabled"> 일반 할인 {{normal.value}}%</p>
            <p v-if="!event.disabled"> 이벤트 할인 {{event.value}}%</p>
            <p v-if="!employee.disabled"> 직원 할인 {{employee.value}}%</p>
            <p>{{computedPrice | comma}}원</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            coupon: {
                value: 1000,
                disabled: true
            },
            normal: {
                value: 1,
                disabled: true
            },
            event: {
                value: 1,
                disabled: true
            },
            employee: {
                value: 1,
                disabled: true
            },
            price: 10000,
            imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
        }
    },
    methods: {
        check: function(e){
            switch(e){
                case "coupon":
                    this.coupon.disabled = !this.coupon.disabled
                    break;
                case "normal":
                    this.normal.disabled = !this.normal.disabled
                    break;
                case "event":
                    this.event.disabled = !this.event.disabled
                    break;
                case "employee":
                    this.employee.disabled = !this.employee.disabled
                    break;
            }
        },
    },
    computed: {
        computedPrice: function(){
            let price = parseInt(this.price);
            
            if (!this.coupon.disabled){
                price = price - this.coupon.value;
            }
            if (!this.normal.disabled){
                price = price - Math.round((this.normal.value * 0.01 * price))
            }
            if (!this.event.disabled){
                price = price - Math.round((this.event.value * 0.01 * price))
            }
            if (!this.employee.disabled){
                price = price - Math.round((this.employee.value * 0.01 * price))
            }
            
            return price;
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
.computed {
    padding: 20px;
}

.computed div {
    float: left;
}

.computed img {
    width: 150px;
    height: 150px;
}
</style>