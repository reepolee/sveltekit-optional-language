import de from '$i18n/de.json';
import en from '$i18n/en.json';
import sl from '$i18n/sl.json';
import { getContext } from 'svelte';

export const language_names = { sl: 'Slovenščina', en: 'English', de: 'Deutsch' };
export const supported_locales = ['en-US', 'en-GB', 'sl-SI', 'de-DE', 'de-AT', 'de-CH'];
export const languages = Object.keys(language_names);

export const translations = {
	sl,
	en,
	de,
};

export const translated_routes = {
	'/sl': '/sl/home',
	'/de': '/de/home',

	'/sl/nastavitve': '/sl/settings',
	'/de/einstellungen': '/de/settings',

	'/sl/prijava': '/sl/login',
	'/de/anmelden': '/de/login',

	'/sl/profil': '/sl/profile',
	'/de/profil': '/de/profile',
};

export const reverse_translated = flip(translated_routes);

/**
 * @param {{ [s: string]: any; } | ArrayLike<any>} data
 */
function flip(data) {
	return Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));
}

/**
 * @param {string} lang
 * @param {unknown} pathname
 */
export function localized_route(lang, pathname) {
	const route = '/' + lang + pathname;
	if (route in reverse_translated) return reverse_translated[route];
}

/**
 * @param {string} lang
 * @param {string} pathname
 */
export function route_to_language(lang, pathname) {
	const actual_route = translated_routes[pathname];
	if (!actual_route) return pathname;
	const _route = actual_route.slice(3);
	const route = '/' + lang + _route;
	return reverse_translated[route];
}

/**
 * @param {string} translation_key
 */
export function _(translation_key) {
	const translations = getContext('translations');
	const ret = translations[translation_key] || translation_key;
	return ret;
}

/**
 * @param {Intl.LocalesArgument} lang
 * @param {string} message_key
 * @param {number} count
 */
export function plural(lang, message_key, count) {
	const pluralRules = new Intl.PluralRules('sl-SI');
	const _validation_messages = _(message_key);
	const validation_messages = _validation_messages.split('|'); // must have five entries to be on the safe side, even if they do not differ for a language
	const pluralForm = pluralRules.select(count);
	const messages = {
		zero: validation_messages[0],
		one: validation_messages[1],
		two: validation_messages[2],
		few: validation_messages[3],
		other: validation_messages[4],
	};

	let ret = messages[pluralForm].replace('{count}', count);
	if (count === 0) ret = validation_messages[0];
	return ret;
}
