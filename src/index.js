import MyButton from "./components/button.vue"

export default {
    install: (app) => {
        app.component("MyButton", MyButton)
    }
};