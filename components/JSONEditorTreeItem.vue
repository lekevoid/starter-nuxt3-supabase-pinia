<template>
	<li :class="[className, `level_${level}`, { has_content: content.content }]">
		<div class="item_name_wrapper w-1/4">
			<input
				v-if="content.name"
				class="item_name form-input block font-bold"
				:value="content.name"
				@change="$emit('saveItem', { type: 'id', id: content.id, newVal: $event.target.value })"
			/>
		</div>
		<div class="item_content_wrapper" v-if="content.content">
			<textarea
				class="item_content form-textarea block border-gray-200 p-1"
				@change="$emit('saveItem', { type: 'content', id: content.id, newVal: $event.target.value })"
				>{{ content.content }}</textarea
			>
		</div>
		<ul v-else-if="content.children" class="w-full">
			<JSONEditorTreeItem v-for="subitem in content.children" :content="subitem" :level="level + 1" @saveItem="$emit('saveItem', $event)" />
		</ul>
	</li>
</template>

<script setup>
const props = defineProps({
	content: Object,
	className: String,
	level: Number,
});

const emit = defineEmits(["saveItem"]);
</script>

<style lang="scss" scoped>
li[class^="level"] {
	position: relative;
	background-color: var(--bg);

	& > div {
		z-index: 10;
		position: relative;
	}

	&.has_content {
		&:after {
			background: radial-gradient(#08f 0%, var(--bg) 60%);
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			z-index: 1;
		}

		&:hover {
			&:after {
				opacity: 0.4;
			}
		}
	}
}

@for $i from 1 through 5 {
	.level_#{$i} {
		$paddingPerLevel: calc(min(#{$i * 5}vw, #{$i * 20}px));
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		@if $i==1 {
			padding: 10px 0;
		}
		align-items: flex-start;
		background: var(--bg);

		& > .item_name_wrapper {
			margin-left: $paddingPerLevel;
		}

		& > .item_content_wrapper {
			width: calc(60vw - $paddingPerLevel);
		}

		&:after {
			@if $i==1 {
				background: linear-gradient(to right, var(--bg) 0%, #666 20%, var(--bg) 50%, #666 80%, var(--bg) 100%);
			}
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			z-index: 1;
		}

		&:hover {
			&:after {
				@if $i==1 {
					opacity: 0.2;
				}
			}
		}

		input,
		textarea {
			@apply border-0 border-b-2 border-gray-200;
			width: 100%;
			border-radius: 8px;
			display: block;
			margin: 2px 0;
			padding: 0.4em;
			background: rgba(#fff, 0.1);
		}
	}
}
</style>
