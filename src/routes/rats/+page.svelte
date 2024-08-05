<script>
    import Navbar from "$lib/Navbar.svelte";

    let ratGenerator = [];
    for (let i = 1; i <= 1e+4; i ++) {
        ratGenerator.push(i);
    }
</script>

<Navbar />

<h1>THE RAT DIMENSION!!!</h1>

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