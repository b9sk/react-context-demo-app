import React from 'react';
import Clapper from './../components/Clapper/Clapper'
export default () => (
    <header className="bg-dark p-3 text-white">
        <div className="row">
            <div className="col col-md-auto align-self-center">
                <a href="/" className="text-white" style={ {textDecoration: "underline"} }>Context Demo</a>
            </div>
            <div className="col">
                {/* Menu */}
            </div>
            <div className="col col-md-auto">
                <Clapper label={"Purrr"} />
            </div>
        </div>
    </header>
)