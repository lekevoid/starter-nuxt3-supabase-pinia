<template>
	<button @click="login">Login with Google</button>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

definePageMeta({
	title: "Login",
	layout: "visitor",
});

// Login method using providers
const login = async () => {
	console.log("Will try to redirect to", `${runtimeConfig.siteUrl}/dashboard`);
	// the redirectTo param is for magic/confirmation links
	const { session, error } = await client.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${runtimeConfig.siteUrl}/dashboard` } });
	// this is for username + password sign in to trigger the watchEffect. The component doesnt get rerendered afaik
	navigateTo({ name: "login", query: { redirect: route.query.redirect } });
};
</script>
