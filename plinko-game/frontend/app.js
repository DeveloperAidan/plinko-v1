window.onload = () => {
    const loadingScreen = document.getElementById("loading-screen");
    const gameContainer = document.getElementById("game-container");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        gameContainer.style.display = "block";
    }, 2000); // Wait 2 seconds for loading

    document.getElementById("play-button").addEventListener("click", () => {
        const riskLevel = document.getElementById("risk-level").value;
        const rowCount = parseInt(document.getElementById("row-count").value);
        const betAmount = parseFloat(document.getElementById("bet-amount").value);

        if (betAmount > 0) {
            playPlinko(betAmount, riskLevel, rowCount);
        } else {
            alert("Please enter a valid bet amount.");
        }
    });
}
