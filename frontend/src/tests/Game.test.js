import Game from "../Components/Game";
import { render, screen } from "@testing-library/react"

describe(`Tests for the game display page`, () => {
    beforeEach(() => {
        const testPlayer1 = `testName1`;
        const testPlayer2 = `testName2`;
        const testChoice1 = `testChoice1`;
        const testChoice2 = `testChoice2`;
        const testResult = `testResult`;
        const testFrom = `/testFrom`;

        const propsObject = {
            location: {
                pathname: `/test`,
                state: {
                    player1: testPlayer1,
                    player1Choice: testChoice1,
                    player2: testPlayer2,
                    player2Choice: testChoice2,
                    result: testResult,
                    from: testFrom
                }
            }
        };

        console.log(propsObject.location.state);
        render(<Game props={propsObject} />);
    });

    test(`Should render the player's names and what they chose`, () => {
        expect(screen.getByText(player1 + ` chose ` + player1Choice` and ` + player2 + ` chose ` + player2Choice)).toBeInTheDocument();
    });
});