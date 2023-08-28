<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import CustomDefaultListItem from '$components/CustomDefaultListItem.svelte';
	import Code from '$components/Code.svelte';
	import ImageBlock from '$components/ImageBlock.svelte'

	export let data: PageData;
	$$restProps

</script>


<article class="post">
	{#if data.mainImage}
		<img
			class="post__cover"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
	{/if}
	<div class="post__container">
		<p class="post__date">
			{formatDate(data._createdAt)}
		</p>
		<h1 class="post__title">{data.title}</h1>
		<div class="post__content">
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
		</div>
	</div>
</article>

<style>
	.post {
		max-width: 70ch;
		margin: 4rem auto;
	}

	.post__date {
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}
</style>