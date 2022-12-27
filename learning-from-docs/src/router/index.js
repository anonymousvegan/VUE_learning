import { createRouter, createWebHistory } from "vue-router";
import vBind from "../views/vBindView.vue";
import Modifilers from "../views/ModifiersView.vue";
import ComputedView from "../views/ComputedView.vue";
import Style from "../views/StyleView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "vBind",
            component: vBind,
        },
        {
            path: "/VBind",
            name: "vBind",
            component: vBind,
        },
        {
            path: "/modifilers",
            name: "modifilers",
            component: Modifilers,
        },
        {
            path: "/computed",
            name: "computed",
            component: ComputedView,
        },
        {
            path: "/style",
            name: "style",
            component: Style,
        },
    ],
});

export default router;
