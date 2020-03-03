import React from 'react';
import { Link } from 'react-router-dom'

const Pet = props => {
    // let pet = props.pet
    // console.log(pet)
    return (
    <div>
        <Link to={`/pets/${name}`}>
        <h2>{props.type} : {props.description} </h2>
        <img src = {props.petImage}/>
        </Link>
    </div>
)
}

export default Pet;
