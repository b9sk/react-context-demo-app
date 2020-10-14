import React from 'react';
import { PurrContext } from "../Context/PurrContext";
// context/src/Context/PurrContext.js
class Header extends React.Component {
    
    constructor(props) {
        super(props)
        // this component is wired to its context
        // a context is undefined when state are getting init
        this.state = { }
    }

    static contextType = PurrContext

    render() {
        const {username, purrDeposit: deposit} = this.context
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
                            Hello, {username}<br />
                            <small>Your Purr Deposit:{' '}<span className="badge badge-light">{deposit}</span> </small>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;