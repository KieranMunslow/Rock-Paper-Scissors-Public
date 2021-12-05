import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
const axios = require('axios');

const MultiUserFormLS = props => {
    const [user1Name, setUser1Name] = useState('');
    const [user2Name, setUser2Name] = useState('');
    const [user1Choice, setUser1Choice] = useState();
    const [postSuccess, setPostSuccess] = useState(false);
    const [user2Choice, setUser2Choice] = useState();
    const [user1ChoiceWord, setUser1ChoiceWord] = useState('');
    const [user2ChoiceWord, setUser2ChoiceWord] = useState('');
    const [result, setResult] = useState('');
    const [user1DataReceived, setUser1DataReceived] = useState(false);

    useEffect(() => {
        if (props.location?.state) {
            setUser1Name(props.location.state.name1);
            setUser2Name(props.location.state.name2);
        }
    }, []);

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        setUser1DataReceived(true);
    }

    const handleSecondSubmit = (e) => {
        e.preventDefault();

        switch (parseInt(user1Choice)) {
            case (0):
                setUser1ChoiceWord("rock");
                break;
            case (4):
                setUser1ChoiceWord("paper");
                break;
            case (3):
                setUser1ChoiceWord("scissors");
                break;
            case (2):
                setUser1ChoiceWord("spock");
                break;
            case (1):
                setUser1ChoiceWord("lizard");
                break;
        }

        switch (parseInt(user2Choice)) {
            case (0):
                setUser2ChoiceWord("rock");
                break;
            case (4):
                setUser2ChoiceWord("paper");
                break;
            case (3):
                setUser2ChoiceWord("scissors");
                break;
            case (2):
                setUser2ChoiceWord("spock");
                break;
            case (1):
                setUser2ChoiceWord("lizard");
                break;
        }

        axios.post(`http://localhost:4000/gameLS`, { "choice": user1Choice, "choice2": user2Choice })
            .then((response) => {
                setResult(response.data.result);
                setPostSuccess(true);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            {postSuccess && <Redirect to={{
                pathname: "/Game",
                state: {
                    player1: user1Name,
                    player1Choice: user1ChoiceWord,
                    player2: user2Name,
                    player2Choice: user2ChoiceWord,
                    result: result,
                    from: props.location.pathname
                }
            }}
            />}
            <form onSubmit={handleFirstSubmit}>
                <div className="form-group">
                    <label htmlFor="user1Name">Player 1 Name:&nbsp;</label>
                    <input
                        type="text"
                        name="user1Name"
                        placeholder="Enter your name..."
                        className="form-control"
                        value={user1Name}
                        onChange={event => setUser1Name(event.target.value)}
                        disabled={user1DataReceived}
                    />
                </div>
                {!user1DataReceived && user1Name && <div className="form-group">
                    <label>
                        Pick your choice:
                        <select defaultValue={'DEFAULT'} onChange={event => setUser1Choice(event.target.value)} disabled={user1DataReceived}>
                            <option disabled value="DEFAULT">Select...</option>
                            <option value="0">Rock</option>
                            <option value="4">Paper</option>
                            <option value="3">Scissors</option>
                            <option value="2">Spock</option>
                            <option value="1">Lizard</option>
                        </select>
                    </label>
                </div>}
                <button id="name-submit" type="submit" disabled={!(user1Name && user1Choice) || user1DataReceived}>Submit</button>
            </form>


            {user1DataReceived && <form onSubmit={handleSecondSubmit}>
                <div className="form-group">
                    <label htmlFor="user2Name">Player 2 Name:&nbsp;</label>
                    <input
                        type="text"
                        name="user2Name"
                        placeholder="Enter your name..."
                        className="form-control"
                        value={user2Name}
                        onChange={event => setUser2Name(event.target.value)}
                    />
                </div>

                {user2Name && <div className="form-group">
                    <label>
                        Pick your choice:
                        <select defaultValue={'DEFAULT'} onChange={event => setUser2Choice(event.target.value)}>
                            <option disabled value="DEFAULT">Select...</option>
                            <option value="0">Rock</option>
                            <option value="4">Paper</option>
                            <option value="3">Scissors</option>
                            <option value="2">Spock</option>
                            <option value="1">Lizard</option>
                        </select>
                    </label>
                </div>}
                <button id="name-submit" type="submit" disabled={!(user2Name && user2Choice)}>Submit</button>
            </form >}
        </>
    );
};

export default MultiUserFormLS;