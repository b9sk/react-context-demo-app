import React from 'react';
import lodash from 'lodash'

export const PurrContext = React.createContext();
PurrContext.displayName = "PurrContext";

export class PurrContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            purrDeposit: lodash.random(5,15)
        }
    }

    render() {
        return(
            <PurrContext.Provider value={ {...this.state, ...this.props.value} }>
                {this.props.children}
            </PurrContext.Provider>
        )
    }
}

export default PurrContext;