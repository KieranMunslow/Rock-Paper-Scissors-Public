import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Game = props => {
    const { player1, player1Choice, player2, player2Choice, result, from } = props.location.state;

    let returnObj;
    let resultTitle;

    if (player2 === "Computer") {
        returnObj = { name: player1 }
        resultTitle = <h1>You {result}!</h1>
    } else {
        returnObj = { name1: player1, name2: player2 };
        if (result === "draw") {
            resultTitle = <h1>You draw!</h1>
        } else {
            resultTitle = (result === "win") ? <h1>{player1} wins!</h1> : <h1>{player2} wins!</h1>
        }
    }

    return (
        <>
            <p>{player1} chose {player1Choice} and {player2} chose {player2Choice}</p>
            {resultTitle}
            <Link to={{
                pathname: from,
                state: returnObj
            }}    >
                <Button variant="dark">Play Again!</Button>
            </Link>
        </>
    )
}

export default Game;