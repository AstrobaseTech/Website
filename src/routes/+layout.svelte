<script>
  import Button from '$lib/components/button/button.svelte';
  import DocsButton from '$lib/components/button/docs-button.svelte';
  import { icon, outline, sm } from '$lib/components/button/variants';
  import Icon from '$lib/components/ui/icon.svelte';
  import '../app.pcss';
</script>

<svelte:head>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <header class="sticky top-0 z-10 border-b bg-background p-3">
    <nav class="m-auto flex w-full max-w-4xl items-center gap-8">
      <a href="/" class="text-2xl font-black">Astrobase</a>
      <div class="grow">
        <!-- <Button class={[ghost, md]} href="/blog">Blog</Button> -->
      </div>
      <DocsButton class={sm} />
    </nav>
  </header>

  <slot />

  <footer class="z-10 flex flex-wrap justify-center space-x-6 border-t bg-background py-16">
    {#each [['github', 'https://github.com/AstrobaseTech', '22px'], ['x', 'https://x.com/librebase', '18px']] as [id, href, size]}
      <Button class={[outline, icon]} {href} target="_blank" rel="noreferrer noopener">
        <Icon {id} height={size} width={size} />
      </Button>
    {/each}
  </footer>
</div>
