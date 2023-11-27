<script>
	export let data;
	let address = '';
	const { addressList } = data;
</script>

<h1>Select Your Address</h1>

<select name="address" id="address" value={address}>
	<option value="">Pick an address</option>
	{#each addressList as item}
		<option value={item}>{item}</option>
	{/each}
</select>
