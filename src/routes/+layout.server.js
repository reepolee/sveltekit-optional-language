export async function load({ locals }) {
	const ret = {
		language: locals?.language,
		translations: locals?.translations,
	};

	console.log('ret:', ret);

	return ret;
}
