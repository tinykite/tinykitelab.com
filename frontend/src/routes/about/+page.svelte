<script>
	import Hero from '$components/Hero.svelte';
</script>

<main class="wrapper">
	<Hero page="about" />
	<div class="section">
		<h2>What I do</h2>
		<ul>
			<li>UI Development</li>
			<li>Design Systems</li>
			<li>Data Visualization</li>
			<li>Visual Storytelling</li>
			<li>Web Design</li>
			<li>Accessibility Consulting</li>
		</ul>

		<h2>Organizations I've collaborated with</h2>
		<ul>
			<li>Axios</li>
			<li>The Library Innovation Lab at Harvard Law School</li>
			<li>White House Custom Colour / ProDPI</li>
			<li>Springboard for the Arts</li>
		</ul>
		<h2>Contact</h2>
		<p>Are you interested in working together? Please feel free to reach out.</p>
		<a href="mailto:dakota@tinykitelab.com" class="section__contactLink">Email me</a>
	</div>
</main>

<style>
	@media (min-width: 43.75rem) {
		.section {
			margin-inline-start: calc(275px + 2rem);
		}
	}

	@media (min-width: 62.5rem) {
		.section {
			margin-inline-start: calc(275px + 3.5rem);
		}
	}

	.section__contactLink {
		display: block;
		background: var(--c-inverseBackground);
		color: var(--c-inverseText);
		border: 2px solid var(--c-inverseText);
		outline: none;
		max-width: max-content;
		padding: 1rem 3rem;
		margin-block-start: 1rem;
		text-decoration: none;
		font-size: 1.25rem;
	}

	.section__contactLink:hover {
		background: var(--c-Background);
		color: var(--c-primaryText);
		border: 2px solid var(--c-primaryText);
		outline: none;
	}
</style>
