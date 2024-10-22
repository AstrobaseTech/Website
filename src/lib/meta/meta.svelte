<script lang="ts">
  import type { Snippet } from 'svelte';
  import { DESCRIPTION } from './meta';

  interface Props {
    title?: string;
    titleNoAppend?: boolean;
    description?: string;
    children?: Snippet;
  }

  let { children, title, titleNoAppend = false, description = DESCRIPTION }: Props = $props();
</script>

<svelte:head>
  <title>
    {title}
    {title && !titleNoAppend ? ' - ' : ''}
    {!title || !titleNoAppend ? 'Astrobase' : ''}
  </title>
  <meta name="description" content={description} />
  {@render children?.()}
</svelte:head>
