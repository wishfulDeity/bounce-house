<script>
    import products from "$lib/data/products.json";
    import contactInfo from "$lib/data/contactInfo.json";
    import Navbar from "$lib/Navbar.svelte";

    let email = contactInfo[0].email;

    let shopMusic = "$lib/audio/shop.mp3";
</script>

<svelte:head>
    <title>Rentals</title>
</svelte:head>

<Navbar />

<h1>Pre-made Castles</h1>
<p>Actual products may differ from what is shown in the images</p>
<p>Click the cards to send us an email at {email}!</p>

<div class="product-container">
    {#each products as product}
        <div class="product">
            <a href="mailto:{email}?subject=Customer inquiry: {product.name}">
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