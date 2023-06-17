<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	export let data: PageData

	const  { posts } = data
</script>

<article class="articleList">
	{#each posts as post}
  <time datetime={formatDate(post._createdAt)}>{formatDate(post._createdAt)}</time>
  <a href="{ post.url }">
    <h2>{ post.title }</h2>
  </a>
  <p>{ post.description }</p>
	{/each}
</article>