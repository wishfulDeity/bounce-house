export function calculateCost(size, walls, extra) {
    let workingSize, sizeCost, wallsCost, extraCost, finalTotal;

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

    switch (extra) {
        case 'none':
            extraCost = 0;
        case 'tunnel':
            extraCost = 70;
        case 'slide':
            extraCost = 160;
    }

    finalTotal = sizeCost + (3 * (wallsCost * workingSize)) + extraCost;

    console.log(`${sizeCost} + (3 * (${wallsCost} * ${workingSize})) + ${extraCost} = ${finalTotal}`)
    return finalTotal;
}