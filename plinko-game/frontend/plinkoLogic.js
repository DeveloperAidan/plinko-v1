function playPlinko(betAmount, riskLevel, rowCount) {
    // Calculate the drop path based on risk level and rows
    let outcome = calculateOutcome(riskLevel, rowCount);
    updateCurrencyCounter(betAmount, outcome);
}

function calculateOutcome(riskLevel, rowCount) {
    // Simplified outcome logic for demonstration
    let houseEdge = 0.05; // 5% house edge
    let winMultiplier = Math.random() > houseEdge ? 2 : 0; // 50/50 chance

    return betAmount * winMultiplier;
}
