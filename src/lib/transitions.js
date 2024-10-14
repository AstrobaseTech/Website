import { cubicOut, linear } from 'svelte/easing';
import { fade as fadeBase, scale as scaleBase } from 'svelte/transition';

/**
 * Animates the opacity of an element from 0 to the current opacity for `in` transitions and from
 * the current opacity to 0 for `out` transitions.
 *
 * https://svelte.dev/docs/svelte-transition#fade
 *
 * @param {Element} node
 * @param {import('svelte/transition').FadeParams} [params]
 * @returns {import('svelte/transition').TransitionConfig}
 */
export function fade(node, { delay = 0, duration = 300, easing = linear } = {}) {
  return fadeBase(node, { delay, duration, easing });
}

/**
 * Animates the opacity and scale of an element. `in` transitions animate from an element's current
 * (default) values to the provided values, passed as parameters. `out` transitions animate from the
 * provided values to an element's default values.
 *
 * https://svelte.dev/docs/svelte-transition#scale
 *
 * @param {Element} node
 * @param {import('svelte/transition').ScaleParams} [params]
 * @returns {import('svelte/transition').TransitionConfig}
 */
export function scale(
  node,
  { delay = 0, duration = 250, easing = cubicOut, start = 0, opacity = 0 } = {},
) {
  return scaleBase(node, { delay, duration, easing, start, opacity });
}
