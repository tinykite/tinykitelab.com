<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import classNames from 'classnames';
	export let data: PageData
	const {posts} = data

</script>

<main class="wrapper">
<ul class="articleList">
	{#each posts as post, i} 
	<li class="articleList__item">
			<time datetime={formatDate(post.publishedAt)}>{ formatDate(post.publishedAt) }</time>
			<a class={classNames("articleList__link", {"articleList__link--emphasis": i === 0})} href={`/blog/${post.slug.current}`}>
				{post.title}
			</a>
			{#if post.description}
			<p>{ post.description }</p>
			{/if}
	</li>
	{/each}
</ul>
</main>

	<style>
		.articleList {
    	list-style: none;
    	padding: 0;
			margin: 0 auto;

		}

		.articleList__item:first-of-type {
			margin-top: 3rem;
		}

		.articleList__item + * {
  		margin-top: 2rem;
  		padding-top: 2rem;
  		border-top: 1px solid #ccc;
		}

		@media (min-width: 43.75rem) {
			.articleList {
				width: 70ch;
			}
		}

		.articleList__link {
			display: block;
			margin: 0.25rem 0 0 0;
			text-decoration: none;
			font-size: 1.5rem;
			font-family: "Canela Deck Web", serif;
  		font-weight: 400;
  		font-style: normal;
  		font-stretch: normal;
  		line-height: 1.125;

		}

		.articleList__link:hover {
			text-decoration: underline;
			background: none;
		}
		.articleList__link--emphasis {
			font-size: 1.75rem;
		}

		@media (min-width: 43.75rem) {
			.articleList__link--emphasis {
				font-size: 2.5rem;
			}

    }

		time {
    	margin: 0;
    	font-family: monospace;
			font-size: 0.8125rem;
  	}

  	p {
    	margin-top: 0.5rem;
  	}

	</style>