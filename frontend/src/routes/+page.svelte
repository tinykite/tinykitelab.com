<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$components/Hero.svelte'
	import Grid from '$components/Grid.svelte'
	import Supplemental from '$components/Supplemental.svelte';
	import Footer from '$components/Footer.svelte';
	export let data: PageData;
	const {posts, caseStudies} = data
</script>
<main class="wrapper">
	<Hero />
	<Grid {caseStudies}/>
	<Supplemental {posts} />
	<Footer />
</main>