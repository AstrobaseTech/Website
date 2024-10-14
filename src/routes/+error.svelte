<script>
  import { page } from '$app/stores';
</script>

<main class="grow p-6 text-center">
  <h1>{$page.status}</h1>
  <p>{$page.error?.message}</p>
</main>
