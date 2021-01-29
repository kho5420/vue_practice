import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Routing from "../components/Routing.vue";
import Axios from "../components/Axios.vue";
import Emit from "../components/Emit.vue";
import Event from "../components/Event.vue";
import Mixin from "../components/Mixin.vue";
import Ref from "../components/Ref.vue";
import VuexVue from "../components/Vuex.vue";
import Watch from "../components/Watch.vue";
import Computed from "../components/Computed.vue";
import VueApi from "../components/VueApi.vue";
import SelectVue from "../components/Select2.vue";
import NextTick from "../components/NextTick.vue";

Vue.use(VueRouter)
Vue.use(Vuex)

export const router = new VueRouter({
    mode: "history",
    routes: [
        { 
            path: "/",
            name: "HomePage",
            component: Home
        },
        { 
            path: "/routing",
            name: "RouterPage",
            component: Routing
        },
        { 
            path: "/axios",
            name: "AxiosPage",
            component: Axios
        },
        { 
            path: "/emit",
            name: "EmitPage",
            component: Emit
        },
        { 
            path: "/event",
            name: "EventPage",
            component: Event
        },
        { 
            path: "/mixin",
            name: "MixinPage",
            component: Mixin
        },
        { 
            path: "/ref",
            name: "RefPage",
            component: Ref
        },
        { 
            path: "/vuex",
            name: "VuexPage",
            component: VuexVue
        },
        { 
            path: "/watch",
            name: "WatchPage",
            component: Watch
        },
        {
            path: "/computed",
            name: "ComputedPage",
            component: Computed
        },
        {
            path: "/vueapi",
            name: "VueApiPage",
            component: VueApi
        },
        {
            path: "/select2",
            name: "selectPage",
            component: SelectVue
        },
        {
            path: "/nexttick",
            name: "nexttickPage",
            component: NextTick
        },
    ],
})