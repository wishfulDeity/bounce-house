<script>
    import { calculateCost } from "$lib/castleCostCalculator.js";
    import Navbar from "$lib/Navbar.svelte";
    import contactInfo from "$lib/data/contactInfo.json"

    let email = contactInfo[0].email;

    let size = "small";
    let walls = "inflated";
    let tunnels = 0;
    let slides = 0;
    let profit = 1.25;
    let maxExtras = 10;
    let costAndTime;
    let estimatedCost;
    let estimatedTime;

    $: {
        console.log(`size:${size}\nwalls:${walls}\ntunnels:${tunnels}\nslides:${slides}\ntotalEstimatedCost:${estimatedCost}`);
        costAndTime = calculateCost(size, walls, slides, tunnels, profit);
        estimatedCost = costAndTime[0];
        estimatedTime = costAndTime[1];
    }

    console.log(contactInfo);
</script>

<svelte:head>
    <title>Development</title>
</svelte:head>

<Navbar />

<h1>Castle Development</h1>

<div class="cost-calculator-container">
    <form>
        <h2>Castle Cost Calculator™</h2>
        <h3>${estimatedCost}</h3>
        <h4>Estimated build time: ~{estimatedTime}-ish days</h4>

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
        <input type="number" id="tunnel" name="tunnel" bind:value={tunnels} min="0" max={maxExtras}>
        <label for="slide">Slides ($160 per)</label>
        <input type="number" id="slide" name="slide" bind:value={slides} min="0" max={maxExtras}>
        <br />
        <a
            class="submit-button"
            href="mailto:{email}?subject={size} bouncy castle with {walls} walls, {tunnels} tunnels, and {slides} slides (estimated cost: {estimatedCost}, eta: {estimatedTime} days)"
        >
        Want to buy this? Email us!
        </a>
    </form>
</div>

<p>Cost includes +{(profit - 1) * 100}% for the cost of actually building it</p>
