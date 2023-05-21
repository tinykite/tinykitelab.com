<script lang="ts">
	import type { Post } from '$lib/utils/sanity'
	export let posts: Post[]
</script>

<div class="supplemental-group">
	<article class="supplemental">
		<h2 class="supplemental__heading">Speaking</h2>
		<p class="supplemental__subheading">
			In 2019 I gave my first Javascript-focused lightning talk, at
			<a href="https://javascriptmn.com/">Javascript MN.</a>
			Shortly afterwards a friend coaxed me into planning a much longer,
			hour-long talk at
			<a href="https://mplsjrdevs.com/">Mpls Jr Devs</a>
			— again all about how to get a little bit weird with scroll-based
			animation. My slides for both talks are included below.
		</p>
		<ul class="supplemental__list">
			<!-- {% for item in talks.items %}
			<li class="supplemental__list-item">
				<a class="supplemental__link" href="{{ item.url }}">
					<span class="supplemental__label">{{item.title}}</span>
				</a>
			</li>
			{% endfor %} -->
		</ul>
	</article>
	<article class="supplemental">
		<h2 class="supplemental__heading">Writing</h2>
		<p class="supplemental__subheading">
			I love it when technical writing is personal and silly and more concerned
			with making others feel comfortable — and even hyped — rather than
			asserting the author as an authority.
		</p>
		<ul class="supplemental__list">
			{#each posts as post } 
			<li class="supplemental__list-item">
				<a class="supplemental__link" href={`/blog/${post.slug}`}>
					<span class="supplemental__label">{ post.title }</span>
				</a>
			</li>
			{/each}
		</ul>
	</article>
</div>

<style>
	.supplemental-group {
  	display: grid;
  	column-gap: 4rem;
	}
	
	@media (min-width: 43.75rem) {
		.supplemental-group {
	    margin-top: 3rem;
	    grid-template-columns: 1fr 1fr;
		}
  }

  @media (min-width: 62.5rem) {
		.supplemental-group {
    	margin-top: 6.25rem;
		}
  }

	.supplemental__heading {
    font-size: 2rem;
  }

	@media (min-width: 43.75rem) {
		.supplemental__heading {
      font-size: 2.25rem;
      margin: 0;
		}
  }

	.supplemental__subheading {
    margin: 1rem 0 0 0;
    font-size: 1rem;
    color: var(--c-primaryText);
	}

	.supplemental__label {
    font-size: 1rem;
	}

	.supplemental__link {
    text-decoration: none;
    font-weight: 700;
	}

	.supplemental__link:hover {
		background: none;
      text-decoration: underline;
	}

	.supplemental__list {
    list-style: none;
    padding: 0;
	}

	.supplemental__list-item {
    border-bottom: 1px solid var(--c-tertiaryText);
    padding: 1rem 0;
    margin: 0;
    line-height: 1;
	}
</style>