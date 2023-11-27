<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { username } = data;
</script>

<svelte:head>
    <title>{$page.data.title || 'Bloom Evolution'}</title>
</svelte:head>

{#if $page.data.notifications}
	<p>{$page.data.notifications}</p>
{/if}

<div>
	<h1 class=" text-xl font-semibold">Welcome {username}</h1>
</div>
<slot />
