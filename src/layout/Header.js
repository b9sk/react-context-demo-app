import React from 'react';
import { PurrContext } from "../Context/PurrContext";
// context/src/Context/PurrContext.js
const Header = () => {
    const purrStore = React.useContext(PurrContext)
    console.log(purrStore);
    return (
        <header className="bg-dark p-3 text-white">
            <div className="row">
                <div className="col col-md-auto align-self-center">
                    <a href="/" className="text-white">🐈'o'gram</a>
                </div>
                <div className="col align-self-center font-weight-light">
                    Context Demo App. Consider to make Purrs please.
                </div>
                <div className="col col-md-auto">
                    <div className="text-white">
                        Hello, {purrStore.username}<br />
                        <small>Your Purr Deposit:{' '}<span className="badge badge-light">{purrStore.purrDeposit}</span> </small>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;