export function calculateCost(size, walls, slides, tunnels) {
    let workingSize, sizeCost, wallsCost, extraCost, finalTotal;
    let profit = 1; // one (1) being 100% as in "no change"

    switch (size) {
        case 'small':
            workingSize = 3;
            sizeCost = 500;
        case 'medium':
            workingSize = 4;
            sizeCost = 750;
        case 'large':
            workingSize = 5;
            sizeCost = 1000;
    }

    switch (walls) {
        case 'inflated':
            wallsCost = 40;
        case 'netted':
            wallsCost = 25;
    }

    extraCost = ((slides * 160) + (tunnels * 70)) * profit;
    finalTotal = sizeCost + (3 * (wallsCost * workingSize)) + extraCost;
    finalTotal *= profit;

    return finalTotal;
}

if (wallType === "net") {
    
}