<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { CaseStudy } from '$lib/utils/sanity';
	export let caseStudies: CaseStudy[];
</script>

<h2 class="grid__group-name">Case Studies</h2>

<ul class="grid">
	{#each caseStudies as caseStudy}
		<li class="grid__item">
			<a href={`/portfolio/${caseStudy.slug.current}`} class="grid__imageLink">
				<span class="u-visually-hidden">{caseStudy.title}</span>
				<figure class="grid__figure">
					<img
						class="grid__image"
						loading="lazy"
						src={urlFor(caseStudy.mainImage)
							.width(600)
							.height(400)
							.fit('min')
							.auto('format')
							.quality(100)
							.dpr(2)
							.url()}
						alt="Cover image for {caseStudy.title}"
						width="600"
						height="400"
					/>
				</figure>
			</a>
			<a class="grid__title" href={`/portfolio/${caseStudy.slug.current}`}>{caseStudy.title}</a>
			<p class="grid__description">{caseStudy.description}</p>
		</li>
	{/each}
</ul>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 3rem;
		row-gap: 2rem;
		padding: 0;
	}

	@media (min-width: 31.25rem) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 43.75rem) {
		.grid {
			row-gap: 4.5rem;
		}
	}

	.grid__group-name {
		font-size: 2rem;
	}

	@media (min-width: 43.75rem) {
		.grid__group-name {
			font-size: 2.25rem;
		}
	}

	.grid__imageLink {
		position: relative;
		display: block;
	}

	.grid__imageLink::after {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0;
		pointer-events: none;
	}

	.grid__imageLink:hover::after {
		opacity: 0.7;
	}

	.grid__description {
		position: relative;
		font-size: 1.125rem;
		line-height: 1.25;
		margin-top: 0.5rem;
	}

	.grid__title {
		display: block;
		font-size: 1.5rem;
		font-family: var(--f-subheadings);
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.125;
		color: inherit;
		margin-top: 1.25rem;
		text-decoration: none;
	}

	.grid__title:hover {
		text-decoration: underline;
		background: none;
	}

	.grid__figure {
		grid-column: 1;
		margin: 0;
		aspect-ratio: 1.5;
	}

	.grid__image {
		width: 100%;
		height: 100%;
	}

	.grid__imageLink::after,
	.grid__image {
		transition: opacity 0.3s;
	}

	.grid__item {
		list-style: none;
		padding: none;
	}
</style>
