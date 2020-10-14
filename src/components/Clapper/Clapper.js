import React from 'react';
import lodash from 'lodash';

class Clapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClaps: lodash.random(0,50)
        }
    }
    render() { 
        return (
            <button
                className="btn btn-outline-primary"
                title={`Add one ${ this.props.label }`}
            >
                {this.state.totalClaps} { this.props.label }
            </button>
        );
    }
}
 
export default Clapper;