<script>
  export let fill = 'var(--txt)';
  export let height = '24px';
  export let width = '24px';

  /**
   * The ID of the icon in `/static/icons.svg`.
   *
   * @type {string}
   */
  export let id;
</script>

<svg {fill} {height} {width}>
  <use xlink:href={'/icons.svg#' + id}></use>
</svg>

<style>
  svg {
    fill: #fff;
  }
</style>
