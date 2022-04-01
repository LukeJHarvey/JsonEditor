import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vuedraggable';
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
