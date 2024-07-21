<script>
    import { calculateCost } from "$lib/castleCostCalculator.js";

    let size;
    let walls;
    let tunnels;
    let slides;
    let totalEstimatedCost;

    $: totalEstimatedCost;
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<h1>Development</h1>

<div class="cost-calculator-container">
    <form>
        <h2>Castle Cost Calculator™</h2>

        <label for="size" class="mainlabel">Size</label>
        <select name="size" id="size" bind:value={size}>
            <option value="small">Small (3m x 3m)</option>
            <option value="medium">Medium (4m x 4m)</option>
            <option value="large">Large (5m x 5m)</option>
        </select>

        <label for="walls" class="mainlabel">Walls</label>
        <select name="walls" id="walls" bind:value={walls}>
            <option value="inflated">Inflated Walls</option>
            <option value="netted">Netted Walls</option>
        </select>

        <label for="tunnel">Tunnels</label>
        <input type="number" id="tunnel" name="tunnel" bind:value={tunnels} min="0" max="10">
        <label for="slide">Slides</label>
        <input type="number" id="slide" name="slide" bind:value={slides} min="0" max="10">

        <input type="submit" value="Calculate Cost" on:click={totalEstimatedCost = calculateCost(size, walls, slides, tunnels)}>

        <label for="submit">Estimated Development Cost: ${totalEstimatedCost}</label>
    </form>
</div>
