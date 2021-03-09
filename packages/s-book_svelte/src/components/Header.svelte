<script>
    import { headerStore } from "../store"
    import { fade, scale } from "svelte/transition";
    // export let message = "";
</script>

<header>
    <h1  in:fade out:scale>
        {$headerStore}
       
    </h1>
</header>
