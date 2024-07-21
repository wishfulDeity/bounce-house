<script>
    import products from "$lib/data/products.json";
</script>

<svelte:head>
    <title>Rentals</title>
</svelte:head>

<h1>Rentals</h1>

<h3>Pre-made castles:</h3>
<p>Actual products may differ from what is shown in the images</p>

<div class="product-container">
    {#each products as product}
        <div class="product">
            <a href={null}>
                <div class="product-card">
                    <img src={product.image} alt={product.description} />
                </div>
                <div class="product-info">
                    <p class="product-name">{product.name}</p>
                    <p>{product.description}</p>
                    <p>${product.price}/day</p>
                    <p>{product.space_lwh}*</p>
                </div>
            </a>
        </div>
    {/each}
</div>

<p>*Additional clearance is required all around and for the blower at the back</p>