<script lang="ts">
	import ImageBlock from './ImageBlock.svelte';

	interface Props {
		portableText: any;
	}

	let { portableText }: Props = $props();
	let { value } = $derived(portableText);
</script>

<div class="imageGrid">
	{#each value.images as gridImage}
		<ImageBlock {gridImage} />
	{/each}
</div>

<style>
	.figure {
		margin-inline: auto;
	}
</style>
