<script>
    import { tabStore, headerStore } from "../store"
    import { createEventDispatcher } from "svelte";
    let currentIndex = 0;
    const handleClick = (index) => {
        currentIndex = index;
    };
    // const dispath = createEventDispatcher();
    const handleChangeMessage = (message) => {
        headerStore.update(_=>message)
    }
</script>

<main>
    <div class="container-div">
        {#each $tabStore as tab, i}
            <div
                class="tab-div_header"
                class:active={currentIndex === i}
                on:click={() => {
                    handleClick(i);
                }}
            >
                {tab.name}
            </div>
        {/each}
    </div>
    <div class="tab-div_content">
        {#if currentIndex === 0}
            <slot name="out" />
        {:else}
            <slot name="inner" />
        {/if}
        <span
            class="span-change"
            on:click={() => {
                handleChangeMessage("风吹过来带走了雨")
                // dispath("changeMessage", "风吹过来带走了雨");
            }}>+</span
        >
    </div>
</main>

<style>
    main {
        width: 300px;
    }
    .container-div {
        display: flex;
        background-color: orange;
    }
    .tab-div_header {
        flex: 1;
        text-align: center;
    }
    .tab-div_content {
        position: relative;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
    .span-change {
        position: absolute;
        top: 4px;
        right: 4px;
    }
</style>
