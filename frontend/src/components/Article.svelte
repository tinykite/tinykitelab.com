<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import CustomDefaultListItem from '$components/CustomDefaultListItem.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Code from '$components/Code.svelte';
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	import Vimeo from '$components/Vimeo.svelte';
	export let data: any;

	type ArticleType = 'caseStudy' | 'blog';
	export let articleType: ArticleType;
	let titleClasses =
		articleType === 'caseStudy' ? 'article__title article__title--emphasis' : 'article__title';
</script>

<main class="wrapper">
	<article class="article">
		{#if articleType === 'blog'}
			<p class="article__date">
				<time datetime={formatDate(data.publishedAt)}>{formatDate(data.publishedAt)}</time>
			</p>
		{/if}
		<h1 class={titleClasses}>{data.title}</h1>

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

		<PortableText
			value={data.body}
			components={{
				listItem: {
					bullet: CustomDefaultListItem,
					number: CustomDefaultListItem,
					normal: CustomDefaultListItem //<-- Adding "normal" as key and defaultListItem as value will supress the warning
				},
				types: {
					// block-level components
					code: Code,
					image: ImageBlock,
					vimeo: Vimeo
				}
			}}
		/>

		{#if articleType === 'caseStudy'}
			<a href={data.url} class="button">Visit Site</a>
			<p><a href="/">Return Home</a></p>
		{:else}
			<a href="/blog" class="button">Return</a>
		{/if}
	</article>
</main>

<style>
</style>
