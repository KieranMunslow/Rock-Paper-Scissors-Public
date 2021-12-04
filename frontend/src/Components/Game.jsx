import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Game = props => {
    // console.log(props.location);
    const { player1, player1Choice, player2, player2Choice, result } = props.location.state;
    return (
        <>
            <p>{player1} chose {player1Choice} and {player2} chose {player2Choice}</p>
            <h1>You {result}!</h1>
            <Link to={{
                pathname: "/SinglePlayer",
                state: { name: player1 }
            }}    >
                <Button variant="dark">Play Again!</Button>
            </Link>
        </>
    )
}

export default Game;