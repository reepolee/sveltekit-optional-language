import { translated_routes } from './i18n/translations';

export function reroute({ url }) {
	let suffix = '';

	let pathname = url.pathname;
	let slug = null;
	const slug_breaks = pathname.split('/~');
	if (slug_breaks.length > 1) {
		pathname = slug_breaks[0];
		slug = slug_breaks[1];
	}

	console.log('pathname:', pathname);

	const segments = pathname.split('/');
	const lastSegment = segments.at(-1);

	if (lastSegment && /\.\w+$/.test(lastSegment)) {
		suffix = '/' + lastSegment;
		pathname = segments.slice(0, -1).join('/');
	}

	if (pathname in translated_routes) {
		let ret = translated_routes[pathname] + suffix;
		if (slug) ret += `/~${slug}`;
		return ret;
	}
}
