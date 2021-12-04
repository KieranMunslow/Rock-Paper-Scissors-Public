import { useState } from "react";

const MultiUserForm = () => {
    const [user1Name, setUser1Name] = useState('');
    const [user2Name, setUser2Name] = useState('');
    const [choice, setChoice] = useState();

    return (
        <form action="/game" method="post">
            <div className="form-group">
                <label htmlFor="user1Name">Player 1 Name:&nbsp;</label>
                <input
                    type="text"
                    name="user1Name"
                    placeholder="Enter your name..."
                    className="form-control"
                    value={user1Name}
                    onChange={event => setUser1Name(event.target.value)}
                />
            </div>
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
            {/* <div className="form-group">
                <label>
                    Pick your choice:
                    <select value={choice} onChange={event => setChoice(event.target.value)}>
                        <option disabled>Select...</option>
                        <option value="0">Rock</option>
                        <option value="1">Paper</option>
                        <option value="2">Scissors</option>
                    </select>
                </label>
            </div> */}

            <button id="name-submit" type="submit" disabled={!user1Name || !user2Name}>Submit</button>
        </form >
    );
};

export default MultiUserForm;