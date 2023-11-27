<script lang="ts">
	import { page } from "$app/stores";

    const { lang = "en" } = $page.params

    type Greet = {
        en: string;
        es: string;
        fr: string;
    }

    const greetings: Greet = {
        en: "Hello!",
        es: "Hola!",
        fr: "Bonjour!"

    }
</script>

<h1 class=" font-bold text-3xl">
    {greetings[lang]}
</h1>