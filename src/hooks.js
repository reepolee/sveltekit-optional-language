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

	const segments = pathname.split('/');
	const lastSegment = segments.at(-1);

	if (lastSegment && /\.\w+$/.test(lastSegment)) {
		suffix = '/' + lastSegment;
		pathname = segments.slice(0, -1).join('/');
	}

	let check_path = pathname;
	let has_slug = null;

	if (segments.length > 3) {
		// we have a slug in subfolder
		segments.pop();
		check_path = segments.join('/');
		has_slug = lastSegment;
	}

	if (check_path in translated_routes) {
		let ret = translated_routes[check_path] + suffix;
		// if (slug) ret += `/~${slug}`;
		if (has_slug) ret += `/${lastSegment}`;
		return ret;
	}
}
