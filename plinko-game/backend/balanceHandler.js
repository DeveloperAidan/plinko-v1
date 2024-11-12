let balances = {};

function updateBalance(userId, outcome, betAmount) {
    if (!balances[userId]) balances[userId] = 1000; // Initialize balance

    balances[userId] += outcome - betAmount;
    return balances[userId];
}

module.exports = { updateBalance };
