export function calculateCost(
    size = "small",
    walls = "inflated",
    slides = 0,
    tunnels = 0,
    profit = 1.25
) {
    let workingSize = 0;
    let baseCost = 0;
    let wallsCostPerMetre = 0;
    let finalTotal = 0;
    let costPerSlide = 160;
    let costPerTunnel = 70;

    // Get size costs and how long each wall is
    switch (size) {
        case "small":
            workingSize = 3;
            baseCost = 500;
            break;

        case "medium":
            workingSize = 4;
            baseCost = 750;
            break;

        case "large":
            workingSize = 5;
            baseCost = 1000;
            break;
    }

    // Get cost of walls
    switch (walls) {
        case "inflated":
            wallsCostPerMetre = 40;
            break;

        case "netted":
            wallsCostPerMetre = 25;
            break;
    }

    console.log(`before assign: ${finalTotal}`);

    // Comments are for a castle with a "medium" size,
    // inflatable walls, 2 tunnels, and 1 slide.

    // Set finalTotal to baseCost to add stuff on later
    finalTotal = baseCost;
    // 750

    console.log(`after assign: ${finalTotal}`);

    // Do walls cost
    finalTotal += 3 * workingSize * wallsCostPerMetre;
    // 750 + 3 * 4 * 40 
    // = 750 + 480
    // = 1230

    console.log(`after wall: ${finalTotal}`);

    // Add cost of tunnels and slides
    finalTotal += costPerSlide * slides;
    finalTotal += costPerTunnel * tunnels;
    // 1230 + 160
    // = 1390
    // 1390 + 2 * 70
    // = 1390 + 140
    // = 1530

    console.log(`total before profit (after tunnels & slides): ${finalTotal}`);

    // Add profit
    finalTotal *= profit;
    // 1530 * 1.25
    // = 1912.5

    console.log(`finalTotal: ${finalTotal}`);
    return finalTotal;
}