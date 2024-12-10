<script>
	const writingSamples = [
		{
			title: 'Upstate with Kristofer Bowman',
			url: 'https://ephemeralatlas.com/upstate-with-kristofer-bowman',
			type: 'Profile',
			publication: 'Ephemeral Atlas'
		},
		{
			title: 'Nighttime in Gibberish Town',
			url: 'https://www.curbsidesplendor.com/books/the-way-we-sleep',
			type: 'Creative Nonfiction',
			publication: 'The Way We Sleep'
		},
		{
			title: 'This American Lie',
			url: 'https://tinykitelab.com/blog/profile-this-american-lie',
			type: 'Profile',
			publication: 'Paper Darts'
		},
		{
			title: `Defending Folk and Country with Radio K's Mountain Connection`,
			url: 'https://tinykitelab.com/blog/interview-defending-folk-and-country-with-radio-k-s-mountain-connection',
			type: 'Interview',
			publication: 'Paper Darts'
		},

		{
			title: `Alyse Knorr's Annotated Glass`,
			url: 'https://tinykitelab.com/blog/alyse-knorr-annotated-glass/',
			type: 'Review',
			publication: 'Paper Darts'
		}
	];

	const visualSamples = [
		{
			title: 'Ultra Basic Coffee',
			url: 'https://ultrabasic.coffee/',
			caseStudy: '/portfolio/ultra-basic-coffee/',
			responsibilities: 'Writing, Design, Web Development',
			image:
				'https://cdn.sanity.io/images/47qkwxva/production/77dc175ec42d4c3312402a40df36b154bd2c98aa-1500x1000.png',
			description: `A personal project that explores the world of pourover coffee through irrevent humor, 
interactive animation, and well-researched, expert advice.`
		},
		{
			title: 'Moon Watching',
			url: 'https://moonwatching.fyi/',
			caseStudy: '/portfolio/moon-watching/',
			image:
				'https://cdn.sanity.io/images/47qkwxva/production/9829c05b99dd857afdebbb4eecd962c833d8eb77-1500x1000.jpg',
			responsibilities: 'Writing, Design, Web Development',
			description:
				'An interactive project for Postlight Labs that provides playful data visualization tools for lunar exploration.'
		},
		{
			title: 'A Modern Eden',
			url: 'https://amoderneden.netlify.app/',
			caseStudy: 'portfolio/a-modern-eden/',
			image:
				'https://cdn.sanity.io/images/47qkwxva/production/49f0fba7325f94a59c047237b6affd317e4392d1-1500x1000.png',
			responsibilities: 'Writing, Design, Web Development',
			description: `A marketing website, produced in collaboration with Sparkbox, that promoted artful products for "style-savvy parents who care about what goes into their kids' rooms."`
		},
		{
			title: 'Amoratorium',
			caseStudy: '/portfolio/amoratorium',
			image:
				'https://cdn.sanity.io/images/47qkwxva/production/c94ec1e70d2ac8002c4a707a6a34958ea6680913-900x600.jpg',
			responsibilities: 'Writing, Design, Web Development',
			description:
				'An artful coffee table book, produced in collaboration with Paper Darts, that blurred the lines between songwriting, art, and poetry.'
		}
		// {
		// 	title: 'Minimal Botany',
		// 	url: 'https://moonwatching.fyi/',
		// 	image:
		// 		'https://cdn.sanity.io/images/47qkwxva/production/7c6c5ebf147f08cd8c6f817133c8beea2dee2d95-1500x1000.png',
		// 	responsibilities: 'Writing, Design, Web Development',
		// 	description:
		// 		'Moon Watching is a Postlight Labs project that experimented with how to foster curiosity about the moon through a series of participatory activities, including moon alert newsletters and an animated lunar phase explorer.'
		// }
	];
</script>

<main class="wrapper">
	<div class="hero">
		<img
			class="hero__image"
			src="/images/dakotasexton-headshot.webp"
			alt="Headshot of Dakota Sexton, wearing glasses, a black beanie, and a blue button-up shirt covered in flamingoes"
			width="275"
			height="275"
		/>
		<div>
			<h1 class="hero__title">Hi, I'm Dakota</h1>
			<p class="hero__eyebrow">
				I'm a storyteller turned multidisciplinary creative with experience in journalism, visual
				design, and creative technology.
			</p>
			<p>
				I originally went to art school for a BFA in fiction writing before pursuing a career in
				magazine journalism. My writing has appeared in award-winning magazines (<em>Paper Darts</em
				>, <em>American Craft</em>,
				<em>Yoga International</em>
				and
				<em>Monkeybicycle</em>) and the anthology <em>The Way We Sleep</em>. It has also appeared in
				a variety of other, less-traditional mediums — including plant-themed Letterpress coasters
				and an animated website about making pourover coffee.
			</p>
			<p>
				In the process, I've discovered one of the things that I love most is imagining creative
				ways to spark cultural conversations. I'm also passionate about exploring creative work as a
				catalyst for social good — and thinking about how visual storytelling and experience design
				can help others feel seen, inspired, and welcome to belong.
			</p>

			<p>
				Below you'll find some of my favorite work in visual storytelling, creative writing, and
				journalism.
			</p>

			<h2 class="supplemental__sectionTitle">Visual Storytelling</h2>

			<ul class="supplemental__list">
				{#each visualSamples as visualSample}
					<li class="supplemental__list-item">
						<h3 class="supplemental__heading">
							{visualSample.title}
						</h3>
						<p class="supplemental__subheading">
							{#if visualSample.url}
								<a class="supplemental__link" href={visualSample.url}>Visit Website</a> |
							{/if}
							<a class="supplemental__link" href={visualSample.caseStudy}>Read Case Study</a>
						</p>

						<img class="supplemental__image" src={visualSample.image} alt="" />

						<p class="supplemental__description">
							{visualSample.description}
						</p>
					</li>
				{/each}
			</ul>

			<h2>Magazine Journalism & Creative Writing</h2>

			<ul class="supplemental__list">
				{#each writingSamples as writingSample}
					<li class="supplemental__list-item supplemental__list-item--compact">
						<a class="supplemental__link" href={writingSample.url}>
							{writingSample.title}
						</a>

						— <em>{writingSample.type}, {writingSample.publication}</em>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

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

	.supplemental__heading {
		margin: 0;
	}

	.supplemental__subheading {
		font-style: italic;
		margin-block-start: 0.25rem;
	}

	.supplemental__description,
	.supplemental__image {
		margin-block-start: 1.25rem;
	}

	.supplemental__link {
		text-decoration: none;
	}

	.supplemental__link:hover {
		background: none;
		text-decoration: underline;
	}

	.supplemental__list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.supplemental__list > :first-child {
		margin-block-start: 2rem;
		padding-block-start: 2rem;
	}

	.supplemental__list-item {
		border-top: 0.5px solid var(--c-tertiaryText);
		padding: 2rem 0;
		margin: 0;

		@media (prefers-color-scheme: dark) {
			border-top-color: rgba(231, 231, 241, 0.3);
		}
	}

	.supplemental__list-item:last-of-type {
		border-bottom: 0.5px solid var(--c-tertiaryText);

		@media (prefers-color-scheme: dark) {
			border-bottom-color: rgba(231, 231, 241, 0.3);
		}
	}

	.supplemental__list-item--compact,
	.supplemental__list-item--compact:first-of-type {
		padding: 1rem 0;
	}
</style>
