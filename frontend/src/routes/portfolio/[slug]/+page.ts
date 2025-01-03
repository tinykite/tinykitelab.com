import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getCaseStudy } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const caseStudy = await getCaseStudy(params.slug);
	if (caseStudy) return caseStudy;

	error(404, 'Not found');
}) satisfies PageLoad;
