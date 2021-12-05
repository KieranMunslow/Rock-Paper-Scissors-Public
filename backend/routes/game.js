const express = require('express');

const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        let choice2 = 0;
        if (req.body?.choice2) {
            choice2 = req.body.choice2;
        } else {
            choice2 = Math.floor(Math.random() * 3);
        }
        const choices = [parseInt(req.body.choice), choice2];
        const resultNum = Math.abs(parseInt(req.body.choice) - choice2);
        var resultWord = "";
        var choiceWord = "";

        switch (resultNum) {
            case (0):
                resultWord = "draw";
                break;
            case (1):
                resultWord = choices.indexOf(Math.max(...choices)) === 0 ? "win" : "lose";
                break;
            case (2):
                resultWord = choices.indexOf(Math.min(...choices)) === 0 ? "win" : "lose";
                break;
        }

        switch (choice2) {
            case (0):
                choiceWord = "rock";
                break;
            case (1):
                choiceWord = "paper";
                break;
            case (2):
                choiceWord = "scissors";
                break;
        }

        res.send({ "choice": choiceWord, "result": resultWord });
    })

module.exports = router;