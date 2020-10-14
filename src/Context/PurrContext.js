import React from 'react';
import lodash from 'lodash'

export const PurrContext = React.createContext();
PurrContext.displayName = "PurrContext";

export class PurrContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.value,
            // Wiring to consumers. A wired consumer can change state of
            // the component. This changing leads to rerender of all consumers
            // (because their context values also is changed props).
            // This is a key concept of how to update a provider
            update: this.updateState.bind(this),
            IPassedThisUpdateMethodToProviderValues : ['from PurrContextProvider\'s state.', 'This trick is based on how do objects ref in JS']
        }
    }

    updateState(newState = {...this.state}) {
        newState =  {...this.state, ...newState} 
        this.setState(newState)
        localStorage.setItem('Purrs', newState.purrDeposit)
    }

    render() {
        return(
            <PurrContext.Provider value={ this.state }>
                {this.props.children}
            </PurrContext.Provider>
        )
    }
}

export default PurrContext;