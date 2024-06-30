<script>
    import products from "$lib/products.json";

    console.log(products);
</script>

<svelte:head>
    <title>Rentals</title>
</svelte:head>

<h1>Rentals</h1>

<div class="product-container">
    {#each products as product (product.id)}
        <div class="product">
            <div class="product-card">
                <img src={product.image} alt={product.alt}/>
            </div>
            <div class="product-info">
                <p>{product.description}</p>
                <p>${product.price}/day</p>
            </div>
        </div>
    {/each}
</div>
