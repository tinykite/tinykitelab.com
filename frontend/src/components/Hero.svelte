<div class="hero">
	<img
		class="hero__image"
		src="/images/dakotasexton-headshot.jpg"
		alt="Headshot of Dakota Sexton, wearing glasses, a black beanie, and a blue button-up shirt covered in flamingoes"
	/>
	<div>
		<h1 class="hero__title">Hi, I'm Dakota</h1>
		<p class="hero__eyebrow">A front-end engineer and interdisciplinary artist who cares about design, data visualization, and storytelling.</p>
		<p>For the last several years I've built intuitive web applications and advocated for the value of centering inclusive design. In my free time, I also love to draw minimalist illustrations of the outdoors and build interactive, participatory websites.</p>
		<p>Before focusing on all that, I went to school for creative writing — and honed my skills as a journalist and essayist for magazines that include <em>Yoga International</em>, <em>Paper Darts</em>, <em>American Craft</em>, and <em>Monkeybicycle</em> plus the anthology <em>The Way We Sleep</em>.</p>
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
	  	margin: 6.25rem 0;
		}
	}

	.hero__title {
	  font-size: 3rem;
	  line-height: 1.125;
	  margin: 1.5rem 0 0;
	  font-family: "Canela Web";
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
  	font-family: "Canela Deck Web";
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
</style>