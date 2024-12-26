<script>
	import { _ } from '$i18n/translations.js';

	let { data } = $props();
</script>

<h1>LOGIN fixed route</h1>
<h1>{_('auth.login.title')}</h1>

<p>language: <b>{data.language}</b></p>
