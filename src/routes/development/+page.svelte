<script>
    import { calculateCost } from "$lib/castleCostCalculator.js";
    import Navbar from "$lib/Navbar.svelte";

    let size;
    let walls;
    let tunnels;
    let slides;
    let totalEstimatedCost;
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<Navbar class="sticky" />

<h1>Development</h1>
<p>(page still in progress)</p>

<div class="cost-calculator-container">
    <form on:submit={totalEstimatedCost = calculateCost(size, walls, slides, tunnels, 1.25)}>
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

        <label for="tunnel">Tunnels</label>
        <input type="number" id="tunnel" name="tunnel" bind:value={tunnels} min="0" max="10">
        <label for="slide">Slides</label>
        <input type="number" id="slide" name="slide" bind:value={slides} min="0" max="10">

        <input type="submit" value="Calculate Cost">

        <label for="submit">Estimated Development Cost: ${totalEstimatedCost}</label>
    </form>
</div>

<p>+25% for the cost of actually building it</p>
