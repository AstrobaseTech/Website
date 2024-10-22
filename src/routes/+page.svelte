<script lang="ts">
  import { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import ExternalLink from 'lucide-svelte/icons/external-link';
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Meta, STRAPLINE } from '$lib/meta';
  import { fade, scale } from '$lib/transitions';

  void particlesInit(loadSlim);

  let Particles: typeof import('@tsparticles/svelte').default;

  onMount(async () => {
    const module = await import('@tsparticles/svelte');
    Particles = module.default;
  });
</script>

<Meta title={STRAPLINE} />

<main class="m-6 flex items-center justify-evenly" in:fade>
  <svelte:component
    this={Particles}
    options={{
      particles: {
        color: { value: '#6d28d9' },
        links: { enable: true, color: '#6d28d9' },
        move: { enable: true, speed: 0.5 },
        number: { value: 240 },
      },
    }}
    class="absolute -z-20"
  />
  <div id="mask" class="pointer-events-none fixed -right-3/4 -top-2/3 -z-10"></div>

  <div class="max-w-md space-y-6" in:scale>
    <h1>{STRAPLINE}</h1>
    <p class="muted">Get started with the JavaScript SDK.</p>
    <Button size="lg" class="w-32" href="/docs/index.html" target="_blank">
      <ExternalLink class="mr-2 h-4 w-4" />
      <span>Docs</span>
    </Button>
  </div>
  <div></div>
</main>

<style>
  #mask {
    height: 225%;
    width: 200%;
    background: radial-gradient(transparent 4%, hsl(var(--background)) 21%);
  }
</style>
