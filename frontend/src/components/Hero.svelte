<script>
	export let page;
</script>

<div class="hero" class:hero--abbreviated={page === 'home'}>
	<img
		class="hero__image"
		src="/images/dakotasexton-headshot.png"
		alt="Headshot of Dakota Sexton, wearing glasses, a black beanie, and a blue button-up shirt covered in flamingoes"
		width="275"
		height="275"
	/>
	<div>
		<h1 class="hero__title">Hi, I'm Dakota</h1>
		<p class="hero__eyebrow">
			I'm a developer and designer passionate about creating inclusive design systems, data
			visualizations, and interactive tools.
		</p>

		{#if page === 'home'}
			<p>
				<a href="/about" class="hero__link">Learn more about who I am</a>
			</p>
		{/if}

		{#if page === 'about'}
			<h2>Who I am</h2>
			<p>
				I know how to navigate the odd borderlands between design and development, and have several
				years of experience applying that expertise to a wide variety of products — from a
				comprehensive newsroom platform to in-browser design tools and a visualization of hundreds
				of years of American caselaw.
			</p>

			<p>
				I'm also a skilled storyteller. Before pursuing a career focused on technology, I was an art
				school student studying creative writing. My writing has appeared in award-winning magazines
				(<em>Paper Darts</em>, <em>American Craft</em>, <em>Yoga International</em> and
				<em>Monkeybicycle</em>) and anthologized in <em>The Way We Sleep</em>. I've additionally
				launched independent storytelling projects that include
				<a href="https://ultrabasic.coffee/">Ultra Basic Coffee</a> and
				<a href="https://ephemeralatlas.com/">Ephemeral Atlas.</a>
			</p>
			<p>
				I love using my multidisciplinary skills to help cross-disciplinary teams creatively
				strategize how to best serve their users — and to together create meaningful stories and
				experiences that anyone can appreciate.
			</p>
		{/if}
	</div>
</div>

<style>
	.hero {
		margin: 2rem 0 0;
	}

	@media (min-width: 43.75rem) {
		.hero {
			display: grid;
			align-items: start;
			grid-template-columns: 275px 1fr;
			gap: 2rem;
		}
	}

	@media (min-width: 62.5rem) {
		.hero {
			grid-column-gap: 3.5rem;
			margin-block-start: 6.25rem;
		}

		.hero--abbreviated {
			margin-block-end: 6.25rem;
		}
	}

	.hero__title {
		font-size: 3rem;
		line-height: 1.125;
		margin: 1.5rem 0 0;
		font-family: var(--f-headings);
		font-weight: 400;
		font-style: normal;
	}

	@media (min-width: 43.75rem) {
		.hero__title {
			margin: 0;
		}
	}

	@media (min-width: 62.5rem) {
		.hero__title {
			font-size: 6.25rem;
		}
	}

	.hero__eyebrow {
		line-height: 1.25;
		font-family: var(--f-subheadings);
		font-weight: 300;
		font-style: normal;
		margin-top: 0.5rem;
		font-size: 1.5rem;
	}

	@media (min-width: 62.5rem) {
		.hero__eyebrow {
			font-size: 2rem;
		}
	}

	.hero__image {
		max-width: 75vw;
		border-radius: 100%;
		margin: 0 auto;
	}

	@media (min-width: 43.75rem) {
		.hero__image {
			max-width: 100%;
		}
	}

	@media (min-width: 62.5rem) {
		.hero__image {
			margin-top: 1.125rem;
			max-width: 100%;
		}
	}

	.hero__link {
		position: relative;
		text-decoration: none;
		font-style: italic;
	}

	.hero__link::after {
		content: '\27F6';
		margin-inline-start: 0.5ch;
	}
</style>
