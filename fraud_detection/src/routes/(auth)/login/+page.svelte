<script lang="ts">
	import { BarData } from './../../../lib/data/chartData.js';
	import { goto } from '$app/navigation';
	import { Label, Input, Helper, Spinner } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import VisitorApi from 'visitorapi';
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient.js';

	let inputValue = '';

	export let data: PageData;

	let reveal: any;

	let values = {
		ip_address: 'dfd ',
		country_name: ' dfdfdf',
		city: 'ssdfd',
		city_co: 'dfsf',
		browser: 'sddfdf',
		os: 'sdffs'
	};

	const handleSubmit = async () => {
		load = true;

		const sqlRegex = /(\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b|\bCREATE\b|\bALTER\b)/i;

		if (sqlRegex.test(inputValue)) {
			
			addScam()
			goto('/fake-dashboard');
		} else {
			
			goto('/dashboard')
		}
	};

	const addScam = async () => {
		try {
			const { data, error } = await supabase
				.from('scams')
				.insert([{ ip_address: reveal.ipAddress, country_name: reveal.countryName, city: reveal.city, city_co: reveal.cityLatLong, browser: reveal.browser, os: reveal.os }])
				
		} catch (error) {}
	};

	const toggleShow = () => {
		show = !show;
	};

	let load = false;

	let show = false;

	onMount(async () => {
		await VisitorApi(env.PUBLIC_API_KEY, (data) => {
			reveal = data;
			console.log(reveal);
		});
	});
</script>

<div class=" lg:w-[45%] min-h-[80vh] pt-24">
	
	<h1 class=" text-[30px] font-medium mb-5">Sign in</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<Label class="space-y-2">
			<Input
				type="email"
				class=" bg-emerald-50 p-4"
				placeholder="Enter Email or Username"
				size="md"
				required
			/>
		</Label>
		<br />
		<Label class="space-y-2">
			<Input
				bind:value={inputValue}
				type={`${show ? 'text' : 'password'}`}
				placeholder="Enter Password"
				class=" bg-emerald-50 p-4"
				size="md"
			>
				<EyeOutline on:click={toggleShow} slot="right" class="w-5 h-5" />
			</Input>
		</Label>
		<div class=" w-full mt-4">
			<p class=" text-gray-500 mr-0 float-right">Forgot Password?</p>
		</div>
		<br />
		<p class=" lg:hidden mt-5 text-center">
			Don't have an account ? <span class=" ml-2"
				><a href="/sign" class=" text-green-600 font-medium"> Register here </a></span
			>
		</p>

		<button 
			class=" hover:shadow-sm transition-all duration-100 mt-10 text-center w-full py-4 rounded-lg font-medium shadow-xl shadow-gray-300 text-white bg-[#068353]"
		>
			<span class=" flex space-x-4 justify-center items-center"><p>Login</p> {#if load}
				<Spinner color='green' size='5' />
			{/if} </span>
		</button>
	</form>
</div>
