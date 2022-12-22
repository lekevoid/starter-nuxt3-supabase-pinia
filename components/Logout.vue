<template>
	<button @click="logout">Logout</button>
</template>

<script setup>
const client = useSupabaseAuthClient();
const router = useRouter();

const logout = async () => {
	const { error } = await client.auth.signOut();
	if (error) {
		return alert("Something went wrong !");
	}
	router.push("/login");
};
</script>
