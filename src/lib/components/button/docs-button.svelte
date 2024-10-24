<script lang="ts">
  import ExternalLink from 'lucide-svelte/icons/external-link';
  import type { ClassNameValue } from 'tailwind-merge';
  import Button from './button.svelte';
  import { primary } from './variants';

  let { class: className }: { class?: ClassNameValue } = $props();
</script>

<Button class={[primary, className]} href="/docs/index.html" target="_blank">
  <ExternalLink class="mr-2 h-4 w-4" />
  Docs
</Button>
