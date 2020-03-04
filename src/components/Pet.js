import React from 'react';
import { Link } from 'react-router-dom'

const Pet = props => {
    return (
        <div>
            <Link to={`pets/${props.type}`}>
                <h2>{props.type}: {props.description}</h2>
                <img src={props.petImage} />    
            </Link>
        </div>  
    )
}

export default Pet;
