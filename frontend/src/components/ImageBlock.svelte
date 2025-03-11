<script lang="ts">
	import SanityImage from './SanityImage.svelte';

	interface Props {
		portableText: any;
		gridImage: any;
	}

	let { portableText, gridImage }: Props = $props();
</script>

{#if portableText?.value}
	<figure class="figure">
		<SanityImage alt={portableText.value.alt} asset={portableText.value.asset} />
	</figure>
{/if}

{#if gridImage}
	<figure class="figure figure--gridItem">
		<SanityImage alt={gridImage.alt} asset={gridImage.image.asset} type="grid" />
	</figure>
{/if}
