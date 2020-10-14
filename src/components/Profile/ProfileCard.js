import React, { Component } from 'react';
import Clapper from './../Clapper/Clapper'
import { PurrContext } from "../../Context/PurrContext";

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handlePurrAdd = this.handlePurrAdd.bind(this)
    }

    static contextType = PurrContext

    handlePurrAdd(btnComponent) {
        console.log("Purr...");

        // Access to PurrContextProvider state
        this.context.update( { purrDeposit: this.context.purrDeposit + 1} ) 

        // Clapper component state
        btnComponent.setState( prevState => ( { totalClaps: prevState.totalClaps + 1 } ) )
    }

    render() { 
        return (
            <article className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col mb-3">
                            <div className="p-3 border-0 rounded text-center text-muted" style={ {width: "100%", height: "200px", background: this.props.data.color } }></div>
                        </div>
                        <div className="col mb-3">
                            <div className="justifier d-flex flex-column justify-content-between" style={ {height: "100%"} }>
                                <div className="description">
                                    <h3 className="text-muted">{this.props.data.name}</h3>
                                    <div><span className="font-weight-bold">Year</span> {this.props.data.year}</div>
                                    <div><span className="font-weight-bold">Pantone value</span> {this.props.data.pantone_value}</div>
                                </div>
                                <Clapper label={"Purrr"} onClick={ (btn) => this.handlePurrAdd(btn) } />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </article>
            );
        }
    }
    
    export default ProfileCard;