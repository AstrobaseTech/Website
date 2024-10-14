<script>
  import ExternalLink from 'lucide-svelte/icons/external-link';
  import { Button } from '$lib/components/ui/button';
  import Icon from '$lib/components/ui/icon.svelte';
  import './app.pcss';
</script>

<svelte:head>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <header class="sticky top-0 z-10 border-b bg-background">
    <nav class="m-auto flex w-full max-w-4xl items-center justify-between gap-3 pr-4">
      <a href="/" class="p-4 text-2xl font-black">Astrobase </a>
      <Button size="sm" href="/docs/index.html" target="_blank">
        <ExternalLink class="mr-2 h-4 w-4" />
        Docs
      </Button>
    </nav>
  </header>

  <slot />

  <footer class="z-10 flex flex-wrap justify-center space-x-6 border-t bg-background py-16">
    {#each [['github', 'https://github.com/AstrobaseTech', '22px'], ['x', 'https://x.com/librebase', '18px']] as [id, href, size]}
      <Button {href} variant="outline" size="icon" target="_blank" rel="noreferrer noopener">
        <Icon {id} height={size} width={size} />
      </Button>
    {/each}
  </footer>
</div>
