<script lang="ts">
	import { PortableText, DefaultListItem  } from '@portabletext/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$$restProps
</script>

<main class="wrapper">
	<article class="article">
	  <h1 class="article__title article__title--emphasis">{ data.title }</h1>

		<PortableText value={data.body} onMissingComponent={false} components={{
			listItem: {
					bullet: DefaultListItem,
					number: DefaultListItem,
					normal: DefaultListItem //<-- Adding "normal" as key and defaultListItem as value will supress the warning
			}
	}} />
	  <a href="/" class="article__button">Return</a>
	</article>
</main>