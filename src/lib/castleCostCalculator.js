// i give up this math doesnt work what the hell
// FIXME: WHAT IS GOING ON!!!!
export function calculateCost(size, walls, slides = 0, tunnels = 0, profit) {
    let workingSize, baseCost, wallsCostPerMetre, finalTotal = 0;
    let costPerTunnel = 70;
    let costPerSlide = 160;

    // Get size costs and how long each wall is
    switch (size) {
        case "small":
            workingSize = 3;
            baseCost = 500;

        case "medium":
            workingSize = 4;
            baseCost = 750;

        case "large":
            workingSize = 5;
            baseCost = 1000;
    }

    // Get cost of walls
    switch (walls) {
        case "inflated":
            wallsCostPerMetre = 40;

        case "netted":
            wallsCostPerMetre = 25;
    }

    // Add cost of base
    finalTotal += baseCost

    // Add cost of tunnels and slides
    finalTotal += costPerTunnel * tunnels;
    finalTotal += costPerSlide * slides;

    // Do walls cost
    finalTotal += 3 * workingSize * (wallsCostPerMetre)

    console.log(`total before profit: ${finalTotal}`);

    // Add profit
    finalTotal *= profit;

    console.log(`finalTotal: ${finalTotal}`);
    return finalTotal;
}