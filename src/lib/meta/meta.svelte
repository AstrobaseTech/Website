<script lang="ts">
  import { DESCRIPTION } from './meta';

  export let title: string;
  export let description = DESCRIPTION;
</script>

<svelte:head>
  <title>{title ? title + ' - ' : ''}Astrobase</title>
  <meta name="description" content={description} />
  <slot />
</svelte:head>
