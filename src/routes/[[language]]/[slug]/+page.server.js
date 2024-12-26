export async function load({ params, parent }) {
	// here you do response = await fetch()

	return {
		slug: params.slug,
	};
}
