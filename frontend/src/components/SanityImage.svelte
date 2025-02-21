<script>
	import { urlFor } from '../lib/utils/image';

	const { image } = $props();

	// Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
	// Structure: image-${storedImgId}-${dimensions}-${format}
	const maxWidth = 1440;

	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	const dimensions = $derived(image?.asset?._ref?.split('-')[2]);
	// const aspectRatio = $derived(
	// 	parseInt(dimensions?.split('x')[1]) / parseInt(dimensions?.split('x')[0])
	// );
	const width = $derived(dimensions?.split('x')[0]);
	const renderedWidth = $derived(parseInt(width) < maxWidth ? parseInt(width) : maxWidth);
	// const renderedHeight = $derived(renderedWidth ? Math.ceil(renderedWidth * aspectRatio) : null);
</script>

{#if image}
	<img
		loading="lazy"
		src={urlFor(image).width(renderedWidth).quality(100).dpr(2).url()}
		alt={image.alt}
	/>
{/if}

<style>
	img {
		transition: opacity 500ms ease-out;
	}
</style>
