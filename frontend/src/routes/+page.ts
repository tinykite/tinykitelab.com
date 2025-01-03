import { getCaseStudies, getLimitedPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = await getLimitedPosts();
	const caseStudies = await getCaseStudies();

	if (!posts) {
		error(404, 'No posts found');
	}

	if (!caseStudies) {
		error(404, 'No case studies found');
	}

	return {
		posts,
		caseStudies
	};
}) satisfies PageLoad;
