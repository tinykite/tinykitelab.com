<script lang="ts">
	import type { Post } from '$lib/utils/sanity'
	export let posts: Post[]

	console.log(posts)

	const speakingEngagements = [
		{
			title: "Mpls Jr Devs: Animation with Framer Motion",
			url: "https://www.figma.com/proto/2LMuWuJhVHVUxNb3b5Kbz5/MPLS-Jr.-Devs%3A-Animation-with-Framer-Motion?page-id=0%3A1&type=design&node-id=18-73&viewport=20%2C6794%2C0.5&scaling=min-zoom"
		}, 
		{
			title: "Javascript MN: Using Intersection Observer with React Hooks",
			url: "https://www.tinykitelab.com/files/lightningtalk.key"
		}
	]
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
			{#each speakingEngagements as speakingEngagement } 
			<li class="supplemental__list-item">
				<a class="supplemental__link" href={speakingEngagement.url}>
					<span class="supplemental__label">{speakingEngagement.title}</span>
				</a>
			</li>
			{/each}
		</ul>
	</article>
	<article class="supplemental">
		<h2 class="supplemental__heading">Writing</h2>
		<p class="supplemental__subheading">
			I love it when technical writing is focused on sparking curiosity — and helping others feel comfortable — rather than
			asserting the author as an authority.
		</p>
		<ul class="supplemental__list">
			{#each posts as post } 
			<li class="supplemental__list-item">
				<a class="supplemental__link" href={`/blog/${post.slug.current}`}>
					<span class="supplemental__label">{ post.title }</span>
				</a>
			</li>
			{/each}
		</ul>
		<a href ="/blog" class="supplemental__readMore">More blog posts 
			<svg class="supplemental__arrowIcon" width="18" height="8" aria-hidden="true" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="0.75" y1="4.10938" x2="16.5038" y2="4.10938" stroke="black"/>
				<line y1="-0.5" x2="4.53905" y2="-0.5" transform="matrix(0.701604 0.712567 -0.701604 0.712567 13.913 1.65625)" stroke="black"/>
				<line y1="-0.5" x2="4.53905" y2="-0.5" transform="matrix(-0.701604 0.712567 -0.701604 -0.712567 17.0976 3.5)" stroke="black"/>
			</svg>				
			</a>
	</article>

</div>

<style>
	.supplemental-group {
  	display: grid;
  	column-gap: 4rem;
	}

	.supplemental__readMore {
		display: flex;
		align-items: center;
		margin-top: 2rem;
		background: none;
		text-decoration: none;
		font-size: 1.25rem;
		font-style: italic;
	}

	.supplemental__readMore:hover {
		text-decoration: underline;
	}

	.supplemental__arrowIcon {
		margin-left: 0.75rem;
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