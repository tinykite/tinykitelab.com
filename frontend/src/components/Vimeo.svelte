<script lang="ts">
	export let portableText: any;
	const { value } = portableText;
</script>

<div class="iframe">
	<iframe
		src={`https://player.vimeo.com/video/${value.id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
		style="position:absolute;top:0;left:0;width:100%;height:100%;"
		title="Axios User Profiles Walkthrough"
	></iframe>
</div>
