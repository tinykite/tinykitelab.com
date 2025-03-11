<script>
	import { urlFor } from '../lib/utils/image';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	/** @type {{asset: any, maxWidth?: number, alt?: any, type?: string}} */
	let { asset, maxWidth = 1200, alt, type } = $props();

	// Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
	// Structure: image-${storedImgId}-${dimensions}-${format}

	const dimensions = $derived(asset?._ref?.split('-')[2]);
	// const aspectRatio = $derived(
	// 	parseInt(dimensions?.split('x')[1]) / parseInt(dimensions?.split('x')[0])
	// );
	const width = $derived(dimensions?.split('x')[0]);
	const height = $derived(dimensions?.split('x')[1]);
	const renderedWidth = $derived(parseInt(width) < maxWidth ? parseInt(width) : maxWidth);

	let imageRef = $state();
	// Once loaded, the image will transition to full opacity
	let loaded = $state(false);

	onMount(() => {
		imageRef.onload = () => {
			loaded = true;
		};
	});
</script>

{#if browser && asset}
	<img
		loading="lazy"
		src={urlFor(asset).width(renderedWidth).auto('format').dpr(2).url()}
		{alt}
		class="image"
		class:loaded
		class:image--grid={type === 'grid'}
		bind:this={imageRef}
		width={renderedWidth}
		style="aspect-ratio: {width} / {height};"
	/>
{/if}

<style>
	img {
		display: block;
		opacity: 0;
		transition: opacity 500ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
