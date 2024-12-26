/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		post_slug: params.blogPost,
	};
}
