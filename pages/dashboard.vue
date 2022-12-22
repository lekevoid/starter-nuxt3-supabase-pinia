<template>
	<h1>Dashboard</h1>
</template>

<script setup lang="ts">
definePageMeta({
	title: "The Dashboard",
	middleware: "auth",
	name: "dashboard",
	layout: "user",
});
</script>

<style>
.textarea_json {
	white-space: pre;
	height: 60vh;
}
</style>
