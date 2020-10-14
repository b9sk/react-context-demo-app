import React, { Component } from 'react';
import Clapper from './../Clapper/Clapper'

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <article className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col mb-3">
                            <div className="p-3 border rounded text-center text-muted" style={ {width: "100%", height: "200px" } }>Profile Photo</div>
                        </div>
                        <div className="col mb-3">Profile Data</div>
                    </div>
                    <Clapper label={"Purrr"} />
                </div>
            </article>
            );
        }
    }
    
    export default ProfileCard;