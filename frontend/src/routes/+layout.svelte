<script lang="ts">
	// Importing this in the layout, instead of app.html, to enable HMR
	import '../styles/global.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
</script>

<Nav />
<slot />
<Footer />
