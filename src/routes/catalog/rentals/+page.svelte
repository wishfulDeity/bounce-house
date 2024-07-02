<script>
    import data from "$lib/data/products.json";
    const products = Array(data);

    console.log(products);
</script>

<svelte:head>
    <title>Rentals</title>
</svelte:head>

<h1>Rentals</h1>

<h3>Pre-made castles:</h3>

<div class="product-container">
    <!-- Temporarily not used b/c I dont know how JSON works -->
    {#each products as product (product.key)}
        <div class="product">
            <div class="product-card">
                <img src={product.image} alt={product.alt} />
            </div>
            <div class="product-info">
                <p class="product-name">{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price}/day</p>
                <p>{product.space_lwh}</p>
            </div>
        </div>
    {/each}
    <!-- <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Junior bounce" />
        </div>
        <div class="product-info">
            <p class="product-name">Junior Bounce</p>
            <p>Smallest castle available.</p>
            <p>$100.00/day</p>
            <p>3.5m x 3m x 2.5m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Micro zone" />
        </div>
        <div class="product-info">
            <p class="product-name">Micro Zone</p>
            <p>Small castle with ceiling and netting.</p>
            <p>$120.00/day</p>
            <p>4m x 3m x 3m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Rat Race</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div>

    <div class="product">
        <div class="product-card">
            <img src="$lib/images/placeholder.png" alt="Placeholder" />
        </div>
        <div class="product-info">
            <p class="product-name">Placeholder</p>
            <p>Placeholder card</p>
            <p>$00.00/day</p>
            <p>0m x 0m x 0m</p>
        </div>
    </div> -->
</div>
