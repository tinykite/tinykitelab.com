<script lang="ts">
	import Article from '$components/Article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$$restProps
</script>

<Article data={data} articleType={'caseStudy'} />