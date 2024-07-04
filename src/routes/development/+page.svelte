<script>
    import { calculateCost } from "$lib/castleCostCalculator.js";

    let size;
    let walls;
    let extra;
    let totalEstimatedCost;
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<h1>Development</h1>

<div class="cost-calculator-container">
    <form>
        <h2>Castle Cost Calculator™</h2>

        <label for="size">Size</label>
        <select name="size" id="size" bind:value={size}>
            <option value="small">Small (3m x 3m)</option>
            <option value="medium">Medium (4m x 4m)</option>
            <option value="large">Large (5m x 5m)</option>
        </select>

        <label for="walls">Walls</label>
        <select name="walls" id="walls" bind:value={walls}>
            <option value="inflated">Inflated Walls</option>
            <option value="netted">Netted Walls</option>
        </select>

        <label for="extra">Extra Features</label>
        <select name="extra" id="extra" bind:value={extra}>
            <option value="none">None</option>
            <option value="tunnel">Tunnel</option>
            <option value="slide">Slide</option>
        </select>

        <input type="submit" value="Calculate Cost" on:click={totalEstimatedCost = calculateCost(size, walls, extra)}>

        <p>Estimated Development Cost: ${totalEstimatedCost}</p>
    </form>
</div>
