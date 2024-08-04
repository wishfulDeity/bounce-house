<script>
    import Navbar from "$lib/Navbar.svelte";

    let ratGenerator = [];
    for (let i = 1; i <= 1e+3; i ++) {
        ratGenerator.push(i);
    }
</script>

<Navbar />

<div class="product-container">
    {#each ratGenerator as ratID}
        <div class="product">
            <a href="{null}">
                <div class="product-card">
                    <img src="$lib/images/ratrace.gif" alt="horizontally spinning rat" />
                </div>
                <div class="product-info">
                    <p>Rat ID: {ratID}</p>
                </div>
            </a>
        </div>
    {/each}
</div>