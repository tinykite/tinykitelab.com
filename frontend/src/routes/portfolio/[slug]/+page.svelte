<script lang="ts">
	import { PortableText, DefaultListItem  } from '@portabletext/svelte';
	import CustomDefaultListItem from '$components/CustomDefaultListItem.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Code from '$components/Code.svelte';
	import type { PageData } from './$types';
	import { urlFor } from '$lib/utils/image';
	export let data: PageData;
	$$restProps

	console.log(data)
</script>

<main class="wrapper">
	<article class="article">
	  <h1 class="article__title article__title--emphasis">{ data.title }</h1>
		<p>{data.description}</p>

		{#if data.mainImage}
		<img
			class="article__cover"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
		{/if}

		<PortableText value={data.body} components={{
			listItem: {
					bullet: CustomDefaultListItem,
					number: CustomDefaultListItem,
					normal: CustomDefaultListItem //<-- Adding "normal" as key and defaultListItem as value will supress the warning
			},
			types: {
			// block-level components
				code: Code,
				image: ImageBlock,
			},

	}} />
	  <a href="/" class="article__button">Return</a>
	</article>
</main>

<style>

 .article {
	max-width: 70ch;
	margin: 1.5rem auto;
 }

 @media (min-width: 43.75rem) {
	.article {margin-top: 3rem;}
 }

	.article__cover {
		margin-top: 3rem;
	}

	.article__button {
		display: block;
		background: var(--c-inverseBackground);
		color: var(--c-inverseText);
		border: 2px solid var(--c-inverseText);
		outline: none;
		max-width: max-content;
		padding: 1rem 3rem;
		margin-top: 3rem;
		text-decoration: none;
		font-size: 1.25rem;
	}

	.article__button:hover {
		background: var(--c-Background);
		color: var(--c-primaryText);
		border: 2px solid var(--c-primaryText);
		outline: none;
	}

	h1 {
		font-size: 4rem;
		text-align: center;
	}

	p:first-of-type {
		font-size: 1.5rem;
		margin-top: 1rem;
		text-align: center;
	}

	:global(figure) {
		margin: 2.5rem 0;
	}
</style>