<script>
    import data from "$lib/data/products.json";
    const products = data;
</script>

<svelte:head>
    <title>Rentals</title>
</svelte:head>

<h1>Rentals</h1>

<h3>Pre-made castles:</h3>

<div class="product-container">
    {#each products as product}
        <div class="product">
            <a href={null}>
                <div class="product-card">
                    <img src={product.image} alt={product.alt} />
                </div>
                <div class="product-info">
                    <p class="product-name">{product.name}</p>
                    <p>{product.description}</p>
                    <p>${product.price}/day</p>
                    <p>{product.space_lwh}</p>
                </div>
            </a>
        </div>
    {/each}
</div>