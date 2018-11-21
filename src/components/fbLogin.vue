<template>
	<fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
	<i class="fa fa-facebook"></i>
    Sign in with Facebook
  </fb-signin-button>
</template>
<script>
export default {
	data() {
		return {
			fbSignInParams: {
				scope: "email,user_likes",
				return_scopes: true
			}
		}
	},
	methods: {
		onSignInSuccess(response) {
			FB.api("/me", user => {
				console.log(`Good to see you, ${user.name}.`)
			})
		},
		onSignInError(error) {
			console.log("Couldn't login onto facebook", error)
		}
	},
	created: function() {
		window.fbAsyncInit = function() {
			FB.init({
				appId: "1111111111",
				autoLogAppEvents: true,
				xfbml: true,
				version: "v3.2"
			})
		}
		;(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0]
			if (d.getElementById(id)) {
				return
			}
			js = d.createElement(s)
			js.id = id
			js.src = "https://connect.facebook.net/en_US/sdk.js"
			fjs.parentNode.insertBefore(js, fjs)
		})(document, "script", "facebook-jssdk")
	}
}
</script>
<style>
.fb-signin-button {
	display: inline-block;
	padding: 4px 8px;
	border-radius: 3px;
	background-color: #4267b2;
	color: rgb(255, 255, 255);
}
.fb-signin-button:active {
	background-color: rgb(16, 5, 107);
}
</style>