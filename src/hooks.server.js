import { sequence } from '@sveltejs/kit/hooks';
import { PUBLIC_DEFAULT_LOCALE } from '$env/static/public';
import { translations } from '$i18n/translations';

export async function handle_language({ event, resolve }) {
	let language = event.params.language || PUBLIC_DEFAULT_LOCALE;
	event.locals.language = language; // make it available to page.data
	event.locals.translations = translations[language];

	return await resolve(event, { transformPageChunk: ({ html }) => html.replace('%html-lang%', language) });
}

export async function handle_my_hook({ event, resolve }) {
	//  write your own if needed here and add it to the end of sequence below
	return await resolve(event);
}

export const handle = sequence(handle_language);
