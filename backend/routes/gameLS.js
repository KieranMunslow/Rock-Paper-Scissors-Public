const express = require('express');

const router = express.Router();

router.route(`/`)
    .post((req, res) => {

        let choice2 = 0;
        if (req.body?.choice2) {
            choice2 = req.body.choice2;
        } else {
            choice2 = Math.floor(Math.random() * 5);
        }
        const choices = [parseInt(req.body.choice), choice2];

        const resultNum = ((((parseInt(req.body.choice) - choice2) % 5) + 5) % 5);

        var resultWord = "";
        var choiceWord = "";

        switch (resultNum) {
            case (0):
                resultWord = "draw";
                break;
            case (1):
            case (3):
                resultWord = "lose";
                break;
            case (2):
            case (4):
                resultWord = "win";
                break;
        }

        switch (choice2) {
            case (0):
                choiceWord = "rock";
                break;
            case (4):
                choiceWord = "paper";
                break;
            case (3):
                choiceWord = "scissors";
                break;
            case (2):
                choiceWord = "spock";
                break;
            case (1):
                choiceWord = "lizard";
        }

        res.send({ "choice": choiceWord, "result": resultWord });
    })

module.exports = router;