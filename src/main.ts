import { createApp } from "vue";
import { Router } from "./router";
import App from "./App.vue";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  BiFacebook,
  BiInstagram,
  BiWhatsapp,
  RiPlayLine,
  RiStopLine,
} from "oh-vue-icons/icons";
import "./index.css";

addIcons(RiPlayLine, RiStopLine, BiWhatsapp, BiInstagram, BiFacebook);

// Router

const app = createApp(App);

app.component("Icon", OhVueIcon);
app.use(Router);

app.mount("#app");
