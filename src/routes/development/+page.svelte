<script>
    import { calculateCost } from "./castleCostCalculator.js";

    let size;
    let walls;
    let extra;
    let totalEstimatedCost;
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<h1>Development</h1>

<!-- <p>
    Use the following as a rough guide to find the cost of creating an
    inflatable castle suitable for child use.
</p>
<p>
    Costs of fan units have already been incorporated into these prices so there
    is no additional charge. <br />
    Prices are GST inclusive.
</p>

<h3>Stage 1: Decide on a base size</h3>
<ul>
    <li>Small (3m x 3m): $500</li>
    <li>Medium (4m x 4m): $750</li>
    <li>Large (5m x 5m): $1000</li>
</ul>

<h3>Stage 2: Decide on type of walls required</h3>
<ul>
    <li>Inflated Walls: $40 per meter needed</li>
    <li>Netted Walls: $25 per meter needed</li>
</ul>

<h3>Stage 3: Extra features (availability depends on size of the castle)</h3>
<ul>
    <li>Tunnel: $70</li>
    <li>Slide: $160</li>
</ul> -->

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
