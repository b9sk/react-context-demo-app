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
                        React Context Demo App.<br />
                        Consider to make Purrs please.
                    </div>
                    <div className="col col-md-auto">
                        <div className="text-white">
                            <small>Hello, {username}<br /></small>
                            <big>Your Purr Deposit:{' '}<span className="badge badge-light">{deposit}</span> </big>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;