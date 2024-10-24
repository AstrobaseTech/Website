<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge, type ClassNameValue } from 'tailwind-merge';
  import { base } from './variants';

  let {
    children,
    class: className,
    ...rest
  }: Omit<HTMLAnchorAttributes, 'class'> & {
    children: Snippet;
    class?: ClassNameValue;
    href: string;
  } = $props();
</script>

<a {...rest} class={twMerge(base, className)}>{@render children()}</a>
