<template>
	<ul class="pr-4">
		<h1>Begin</h1>
		<JsonEditorVue v-model="blah" />
		<h1>End</h1>
		<!-- <JSONEditorTreeItem v-for="item in guiContent" :content="item" :level="1" @saveItem="$emit('saveItem', $event)" /> -->
	</ul>
	<!--<pre>{{ guiContent }}</pre>-->
</template>

<script setup>
const props = defineProps({
	content: Object,
});

const blah = ref(props.content);

const emit = defineEmits(["saveItem"]);

/* const guiContent = computed(() => {
	const init = props.content;

	function attributeOrder(obj) {
		let order = 1;
		for (const item of obj) {
			if (item.children && Object.values(item.children).length > 0) {
				item.children = attributeOrder(item.children);
			}
			item.order = order;
			order++;
		}
		return obj;
	}

	return attributeOrder(init);
}); */
</script>
