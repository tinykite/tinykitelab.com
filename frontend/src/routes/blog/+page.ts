import { getPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = await getPosts();

	if (!posts) {
		throw error(404, 'No posts found');
	}

	return {
		posts
	};
}) satisfies PageLoad;
