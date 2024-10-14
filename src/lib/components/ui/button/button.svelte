<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';
  import { type Props, buttonVariants } from './index.js';

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  type $$Props = Props;

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];
  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
