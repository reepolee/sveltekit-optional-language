<script>
	import { _ } from '$i18n/translations.js';
	let { data } = $props();
</script>

<h1>HOME fixed route for language</h1>

<p>language: <b>{data.language}</b></p>

<a href="/">{_('back')}</a>
