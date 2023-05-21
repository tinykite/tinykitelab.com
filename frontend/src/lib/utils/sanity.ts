import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

if (!PUBLIC_SANITY_DATASET || !PUBLIC_SANITY_PROJECT_ID) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getCaseStudies(): Promise<CaseStudy[]> {
	return await client.fetch(
		groq`*[_type == "caseStudy" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export interface CaseStudy {
	_type: 'caseStudy';
	_createdAt: string;
	title?: string;
	slug: string;
	description: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	description: string;
	slug: Slug;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
