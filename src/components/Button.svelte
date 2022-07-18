<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button
  class="bg-zinc-800 text-white p-3 m-3 shadow-sm rounded-md"
  on:click={() => dispatch("changeOffset")}
>
  <slot />
</button>
