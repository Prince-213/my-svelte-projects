<script>
	import '../app.postcss';
	import { afterUpdate } from 'svelte';
	import { BottomNavHeader, MegaMenu, BottomNav } from 'flowbite-svelte'
	import {BlogHead, } from 'flowbite-svelte-blocks'

	let show = false;

	afterUpdate(() => {
		show = true;
	});

	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>


<div class=" w-full h-screen">

	<Header />
	<br>
	<slot />
	<Footer />

	
</div>
