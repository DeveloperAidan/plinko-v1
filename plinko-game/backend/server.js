const express = require('express');
const bodyParser = require('body-parser');
const { updateBalance } = require('./balanceHandler');

const app = express();
app.use(bodyParser.json());

app.post('/api/play', (req, res) => {
    const { betAmount, riskLevel, rowCount } = req.body;
    let outcome = calculateOutcome(betAmount, riskLevel, rowCount);
    
    let updatedBalance = updateBalance(req.userId, outcome, betAmount);
    res.json({ outcome, updatedBalance });
});

app.listen(3000, () => console.log('Server running on port 3000'));
