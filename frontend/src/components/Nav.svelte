<script lang="ts">
	import { navItems } from '$lib/consts';
	import { page } from '$app/state';

  const isCurrentPage = (url: string) => {
    console.log(url)
    console.log(page.url.pathname)
    if (url === '/blog' && page.url.pathname.includes('/blog'))
    { return 'page' }

    if (page.url.pathname === url) {
      return 'page'
    }

    return undefined
  }

 </script>

<header class="site-header">
	<nav class="site-nav">
		<a href="/" aria-current={isCurrentPage('/')} class="site-nav__logo">
      <span class="u-visually-hidden">Tiny Kite Lab</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.67 183.93">
        <path d="m77.06,109.28c9.43,9.31,18.35,19.06,27.66,28.37l-1.48,2.49-25.83,43.67-.07.12-.07-.12-25.36-42.86-1.95-3.3c-.23-.55-.02-.88.41-1.31,4.9-4.92,9.81-9.82,14.69-14.76,3.95-4,7.85-8.05,12-12.3Z"/>
        <path d="m77.41.05l-.07-.05-.07.05L0,53.21l41.17,69.59c.76-.76,1.52-1.51,2.28-2.28,7-6.99,14-14.98,21.01-21.96.54-.54.34-.87-.1-1.33-1.69-1.7-3.34-3.44-5-5.16-3.8-3.92-7.53-7.9-11.42-11.73-3.19-3.14-5.11-6.94-5.67-11.26-.47-3.58-.27-7.25-.32-10.88-.01-1.01.09-2.05.28-3.04.19-.94.78-1.81,1.85-1.55,1.02.26,2.12.69,2.87,1.38,2.39,2.21,4.66,4.55,6.94,6.88,4.49,4.57,8.96,9.18,13.45,13.76,2.05,2.1,4.15,4.16,6.2,6.26,1.23,1.26,2.4,2.58,3.62,3.89.29-.23.47-.35.61-.49,9.67-9.72,19.34-19.44,29.01-29.15.64-.65,1.28-1.3,1.98-1.89,1.22-1.02,2.85-.94,3.52.24.37.65.59,1.48.59,2.22.01,3.85.2,7.73-.21,11.54-.54,5.11-2.7,9.55-6.49,13.22-5.58,5.42-11,11.01-16.6,16.64,7.07,7.15,14.1,14.28,21.15,21.41.94.95,1.96,1.99,2.95,2.99l41-69.3L77.41.05Zm27.74,35c-2.52,2.38-5.05,4.74-7.58,7.1-1.21,1.12-2.43,2.22-3.63,3.35-3.03,2.85-6.05,5.72-9.09,8.57-1.83,1.71-3.69,3.41-5.54,5.1-1.55,1.43-2.42,1.4-3.97-.03-4.12-3.8-8.27-7.55-12.36-11.38-3.92-3.66-7.77-7.4-11.65-11.1-.51-.48-1.12-.87-1.54-1.41-.91-1.17-.73-1.7.68-2.06,1.77-.45,3.56-.83,5.34-1.22,2.98-.66,5.95-1.33,8.92-1.95,1.12-.24,2.07-.13,2.99.84,2.52,2.69,5.18,5.23,7.79,7.83,1.25,1.24,1.95,1.33,3.22.12,2.64-2.49,5.31-4.97,7.77-7.64,1.3-1.42,2.61-1.69,4.34-1.26,4.41,1.11,8.84,2.16,13.25,3.28.59.15,1.11.55,1.75.88-.32.46-.46.77-.69.98Z"/>
      </svg>
    </a>
		<ul class="site-nav__nav-list"> 
			{#each navItems as navItem }
			<li class="site-nav__nav-item">
				<a
        
					class={'site-nav__nav-link'}
          aria-current={isCurrentPage(navItem.url)}
					href="{ navItem.url }">
					{ navItem.text }</a
				>
			</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
 svg {
    fill: currentColor;
    height: 65px;
    width: auto;
 }

	.site-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    flex-direction: column;
    width: 85%;
    max-width: 65rem;
    margin: 2rem auto 0;

    @media (min-width: 50rem) {
      flex-direction: row;
      margin: 5rem auto 0;
    }
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

    @media (min-width: 50rem) {
      font-size: 1.5rem;
    }

    &:hover, &[aria-current="page"] {
      border-bottom: 1px solid var(--c-secondaryText);
      background: none;
    }
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

    &:hover {
      background: none;
    }
  }
</style>