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

		<h2>Technologies I use</h2>
		<p>
			I love to get nerdy about CSS, HTML, and JavaScript. I've mentored many engineers in these
			languages plus a broad range of additional JavaScript-oriented technologies — including
			Svelte, React/Next.js, Vue, web components, and d3.js.
		</p>

		<h2>Who I love working with</h2>
		<p>I love collaborating with organizations with an interest in:</p>
		<ul>
			<li>Social impact and public awareness</li>
			<li>Creative technology</li>
			<li>Software development that centers inclusive design</li>
			<li>Data-driven or multidisciplinary storytelling</li>
		</ul>

		<h2>Past collaborators</h2>
		<ul>
			<li>Postlight</li>
			<li>Axios</li>
			<li>The Library Innovation Lab at Harvard Law School</li>
			<li>White House Custom Colour / ProDPI</li>
			<li>Springboard for the Arts</li>
		</ul>
		<h2>Contact</h2>
		<p>Are you interested in working together? Please feel free to reach out.</p>
		<a href="mailto:dakota@tinykitelab.com" class="button">Email me</a>
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
</style>
