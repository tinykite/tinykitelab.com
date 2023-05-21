import { getCaseStudies, getPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = await getPosts();
	const caseStudies = await getCaseStudies();

	if (!posts) {
		throw error(404, 'No posts found');
	}

	if (!caseStudies) {
		throw error(404, 'No case studies found');
	}

	return {
		posts,
		caseStudies
	};
}) satisfies PageLoad;
