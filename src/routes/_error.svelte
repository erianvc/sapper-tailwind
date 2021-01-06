<script>
    export let status;
    export let error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}

<style>
    h1, p {
        @apply text-center my-0 mx-auto;
    }

    h1 {
        @apply text-4xl uppercase font-bold mb-2 sm:text-5xl;
    }

    p {
        @apply my-4 mx-auto;
    }
</style>
