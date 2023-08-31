<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$components/Article.svelte';
	export let data: PageData;
	$$restProps
</script>


<Article data={data} articleType={'blog'} />