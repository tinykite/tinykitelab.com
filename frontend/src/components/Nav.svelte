<script lang="ts">
	import { navItems } from '$lib/consts'
  import { page } from '$app/stores';
  import classNames from 'classnames'

  let currentSlug = $page.url.pathname

 </script>

<header class="site-header">
	<nav class="site-nav">
		<a href="/" aria-label="Tiny Kite Lab" class="site-nav__logo"><img class="site-nav__logo" src="/images/logo-large.png" alt="Tiny Kite Logo"></a>
		<ul class="site-nav__nav-list"> 
			{#each navItems as navItem }
			<li class="site-nav__nav-item">
				<a
        
					class={classNames('site-nav__nav-link', { 'site-nav__nav-link--current': currentSlug === navItem.url })}
          aria-current={ currentSlug === navItem.url && "page"}
					href="{ navItem.url }">
					{ navItem.text }</a
				>
			</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.site-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  flex-direction: column;
  width: 85%;
  max-width: 65rem;
  margin: 2rem auto 0;
	}

	@media (min-width: 50rem) {
		.site-nav {
			flex-direction: row;
      margin: 5rem auto 0;
		}
  }

	.site-nav [data-state="active"],
	.site-nav [aria-current="page"] {
    color: var(--c-primaryText);
    text-decoration: none;
    padding: 0 0 1px;
    border-bottom: 1px solid var(--c-secondaryText);
  }

	.site-nav__nav-list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 1rem;
  }

	@media (min-width: 50rem) {
		.site-nav__nav-list {
      margin: 0;
		}
   }

  .site-nav__nav-link {
    color: var(--c-primaryText);
    text-decoration: none;
    font-size: 1rem;
  }

	@media (min-width: 50rem) {
		.site-nav__nav-link {
      font-size: 1.5rem;
		}
  }

	.site-nav__nav-link:hover {
    border-bottom: 1px solid var(--c-secondaryText);
    background: none;
  }

	.site-nav__nav-item {
    margin-top: 0rem;
	}


  .site-nav__nav-item + .site-nav__nav-item {
    margin-left: 1rem;
  }

  .site-nav__logo {
    display: block;
    height: 3.875rem;
    width: auto;
  }

	.site-nav__logo:hover {
      background: none;
  }
</style>