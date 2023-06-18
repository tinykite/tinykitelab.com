<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="wrapper">
	<article class="article">
	  <h1 class="article__title article__title--emphasis">{ data.title }</h1>

		<PortableText value={data.body} />
	  <a href="/" class="article__button">Return</a>
	</article>
</main>