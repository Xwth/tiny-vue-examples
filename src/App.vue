<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dragndrop">Drag and drop</router-link>
    </div>
    <br>
    <fb-login></fb-login>
    <router-view/>
  </div>
</template>
<script>
import fbLogin from "./components/fbLogin.vue"
export default {
	components: {
		fbLogin
	}
}
</script>