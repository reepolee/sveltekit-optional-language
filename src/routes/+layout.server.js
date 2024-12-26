export async function load({ locals }) {
	const ret = {
		language: locals?.language,
		translations: locals?.translations,
	};

	return ret;
}
