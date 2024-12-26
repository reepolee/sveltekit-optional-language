<script>
	import { setContext } from 'svelte';
	import '../app.css';
	import { page } from '$app/state';
	let { data, children } = $props();

	setContext('translations', page.data.translations);
</script>

<nav class="flex gap-4 bg-[#b40000] p-8 text-white" data-sveltekit-reload>
	<a href="/">Home</a>
	<a href="/sl">SL Home</a>
	<a href="/de">DE Home</a>
	<a href="/login">Login</a>
	<a href="/profile">Profile</a>
	<a href="/sl/login">SL Login</a>
	<a href="/sl/slug-1">SL slug-1</a>
	<a href="/de/slug-1">DE slug-1</a>
	<a href="/slug-9">slug-9</a>
	<a href="/hr/slug-199">HR slug-199 (no translations)</a>
</nav>
<main class="px-8 py-16">
	{@render children()}
</main>

<pre class="bg-gray-100 p-8">{JSON.stringify(data, null, 4)}</pre>
