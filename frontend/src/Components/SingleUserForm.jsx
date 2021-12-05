import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const axios = require('axios');

const SingleUserForm = props => {
    const [userName, setUserName] = useState('');
    const [postSuccess, setPostSuccess] = useState(false);
    const [choice, setChoice] = useState();
    const [choiceWord, setChoiceWord] = useState('');
    const [compChoice, setCompChoice] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        if (props.location?.state) {
            setUserName(props.location.state.name);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        switch (parseInt(choice)) {
            case (0):
                setChoiceWord("rock");
                break;
            case (1):
                setChoiceWord("paper");
                break;
            case (2):
                setChoiceWord("scissors");
                break;
        }

        axios.post(`http://localhost:4000/game`, { "choice": choice })
            .then((response) => {
                setCompChoice(response.data.choice);
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
                    player1: userName,
                    player1Choice: choiceWord,
                    player2: 'Computer',
                    player2Choice: compChoice,
                    result: result,
                    from: props.location.pathname
                }
            }}
            />}
            < form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Player Name:&nbsp;</label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Enter your name..."
                        className="form-control"
                        value={userName}
                        onChange={event => setUserName(event.target.value)}
                    />
                </div>
                {userName && <div className="form-group">
                    <label>
                        Pick your choice:
                        <select defaultValue={'DEFAULT'} onChange={event => setChoice(event.target.value)}>
                            <option disabled value="DEFAULT">Select...</option>
                            <option value="0">Rock</option>
                            <option value="1">Paper</option>
                            <option value="2">Scissors</option>
                        </select>
                    </label>
                </div>}

                <button id="name-submit" type="submit" disabled={!(userName && choice)}>Submit</button>
            </form >
        </>
    );
};

export default SingleUserForm;