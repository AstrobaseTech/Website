<script lang="ts">
  interface Props {
    id: 'github' | 'x';
    fill?: string;
    height?: string;
    width?: string;
  }

  let { id, fill = '#fff', height = '24px', width = '24px' }: Props = $props();
</script>

<svg {fill} {height} {width}>
  <use xlink:href={'/icons.svg#' + id}></use>
</svg>
