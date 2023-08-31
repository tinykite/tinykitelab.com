<script lang="ts">
	import { PortableText  } from '@portabletext/svelte';
	import CustomDefaultListItem from '$components/CustomDefaultListItem.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Code from '$components/Code.svelte';
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	export let data: any;

	type ArticleType = 'caseStudy' | 'blog'
	export let articleType: ArticleType;
	let titleClasses = articleType === 'caseStudy' ? 'article__title article__title--emphasis' : 'article__title'
</script>

<main class="wrapper">
	<article class="article">
		{#if articleType === 'blog'}
		<p class="article__date">
			{formatDate(data._createdAt)}
		</p>
		{/if}
	  <h1 class={titleClasses}>{ data.title }</h1>

		{#if articleType === 'caseStudy'}
		<p class="article__description">{data.description}</p>
		{/if}

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
	margin: 1.5rem auto;
	display: grid;
	grid-template-columns: 1fr 70ch 1fr;
 }

 @media (min-width: 43.75rem) {
	.article {
		margin-top: 3rem;
	}
 }

 /* TODO: Refactor more elegantly */
 :global(.article :not(figure)) {
	grid-column: 2/2;
 }

 :global(figure), .article img {
		grid-column: 1/-1;
		max-width: 100%;
	}

	.article__cover {
		margin-top: 3rem;
	}

	.article__title {
		font-size: 2.5rem;
	}

	.article__title--emphasis {
		font-size: 4rem;
		text-align: center;
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
	
	.article__description {
		font-size: 1.5rem;
		margin-top: 1rem;
		text-align: center;
	}

	:global(figure) {
		margin: 2.5rem 0;
	}

	.article__date {
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}
</style>