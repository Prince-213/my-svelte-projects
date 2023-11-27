<script lang="ts">
    import { page } from '$app/stores';
    
</script>

<h1 class=" text-3xl font-bold">{$page.status} with message {$page.error?.message}</h1>

<style>
    h1 {
        font-size: 40px;
        font-weight: bold;
    }
</style>