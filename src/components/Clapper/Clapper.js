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
            <>
            <button
                className="btn btn-outline-primary btn-block"
                title={`Add one ${ this.props.label }`}
            >
                <span className="badge badge-pill badge-warning">{this.state.totalClaps}</span>
                {' '}
                { this.props.label }s
            </button>
            </>
        );
    }
}
 
export default Clapper;