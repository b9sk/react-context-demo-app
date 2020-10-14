import React, { Component } from 'react';
import Clapper from './../Clapper/Clapper'

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.data);
        return (
            <article className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col mb-3">
                            <div className="p-3 border-0 rounded text-center text-muted" style={ {width: "100%", height: "200px", background: this.props.data.color } }></div>
                        </div>
                        <div className="col mb-3">
                            <h3 className="text-muted">{this.props.data.name}</h3>
                            <div><span className="font-weight-bold">Year</span> {this.props.data.year}</div>
                            <div><span className="font-weight-bold">Pantone value</span> {this.props.data.pantone_value}</div>
                        </div>
                    </div>
                    <Clapper label={"Purrr"} />
                </div>
            </article>
            );
        }
    }
    
    export default ProfileCard;