<script>
	import { urlFor } from '../lib/utils/image';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const { image } = $props();

	// Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
	// Structure: image-${storedImgId}-${dimensions}-${format}
	let maxWidth = 1440;

	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	let dimensions = $derived(image?.asset?._ref?.split('-')[2]);
	// If we split dimensions by "x", we get the width (1350) and height (900)
	let [width, height] = $derived(dimensions?.split('x').map(Number) || [null, null]);
	let [renderedWidth] = $derived(width < maxWidth ? width : maxWidth);

	let imageRef;
	// Once loaded, the image will transition to full opacity
	let loaded = $state(false);

	onMount(() => {
		if (imageRef) {
			imageRef.onload = () => {
				loaded = true;
			};
		}
	});
</script>

{#if browser && image}
	<img
		loading="lazy"
		src={urlFor(image).width(renderedWidth).quality(100).url()}
		alt={image.alt}
		class:loaded
		bind:this={imageRef}
	/>
{/if}

<style>
	img {
		opacity: 0;
		transition: opacity 500ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
