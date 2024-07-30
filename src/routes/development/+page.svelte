<script>
    import { calculateCost } from "$lib/castleCostCalculator.js";
    import Navbar from "$lib/Navbar.svelte";

    let size;
    let walls;
    let tunnels;
    let slides;
    let profit = 1.25;
    let totalEstimatedCost;

    $: {
        console.log(`size:${size}\nwalls:${walls}\ntunnels:${tunnels}\nslides:${slides}\ntotalEstimatedCost:${totalEstimatedCost}`);
        totalEstimatedCost = calculateCost(size, walls, slides, tunnels, profit);
    }
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<Navbar />

<h1>Development</h1>

<div class="cost-calculator-container">
    <form>
        <h2>Castle Cost Calculator™</h2>

        <label for="size" class="mainlabel">Size</label>
        <select name="size" id="size" bind:value={size}>
            <option value="small">Small (3m x 3m) $500</option>
            <option value="medium">Medium (4m x 4m) $750</option>
            <option value="large">Large (5m x 5m) $1000</option>
        </select>

        <label for="walls" class="mainlabel">Walls</label>
        <select name="walls" id="walls" bind:value={walls}>
            <option value="inflated">Inflated Walls $40 per metre</option>
            <option value="netted">Netted Walls $25 per metre</option>
        </select>

        <label for="tunnel">Tunnels ($70 per)</label>
        <input type="number" id="tunnel" name="tunnel" bind:value={tunnels} min="0" max="10">
        <label for="slide">Slides ($160 per)</label>
        <input type="number" id="slide" name="slide" bind:value={slides} min="0" max="10">
        <h3>${totalEstimatedCost}</h3>
    </form>
</div>

<p>Cost includes +{(profit - 1) * 100}% for the cost of actually building it</p>
