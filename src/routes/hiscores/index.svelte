<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    export let hiscores: string;
</script>

<svelte:head>
    <title>Hiscores</title>
    <meta name="description" content="OSRS Hiscores" />
</svelte:head>

<p>{hiscores}</p>