import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import FBSignInButton from "vue-facebook-signin-button"
Vue.use(FBSignInButton)

new Vue({
	el: "#app",
	template: "<App/>",
	components: { App },
	router,
	store,
	render: h => h(App)
})
