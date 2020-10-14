import React from 'react';

class Clapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <button
                className="btn btn-outline-primary text-white"
                title={`Add one ${ this.props.label }`}
            >
                +1 { this.props.label }
            </button>
        );
    }
}
 
export default Clapper;