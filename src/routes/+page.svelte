<script lang="ts">
  import { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import { onMount } from 'svelte';
  import DocsButton from '$lib/components/button/docs-button.svelte';
  import { lg } from '$lib/components/button/variants';
  import Meta from '$lib/components/meta/meta.svelte';
  import { STRAPLINE } from '$lib/components/meta/meta';
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
    <DocsButton class={[lg, 'w-32']} />
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
