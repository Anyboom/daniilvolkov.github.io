import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faVk, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faVk, faSquareGithub, faXmark);

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
