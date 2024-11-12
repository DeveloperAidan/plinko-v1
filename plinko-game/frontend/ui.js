function updateCurrencyCounter(betAmount, outcome) {
    let balance = document.getElementById("balance").innerText;
    let earnings = document.getElementById("earnings").innerText;
    let losses = document.getElementById("losses").innerText;

    if (outcome > 0) {
        earnings += outcome;
    } else {
        losses += betAmount;
    }

    balance += outcome - betAmount;
    document.getElementById("balance").innerText = `Balance: $${balance}`;
    document.getElementById("earnings").innerText = `Earnings: $${earnings}`;
    document.getElementById("losses").innerText = `Losses: $${losses}`;
}
