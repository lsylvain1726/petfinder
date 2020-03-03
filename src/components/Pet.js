import React from 'react';

const Pet = props => {
    let pet = props.pet
    console.log(pet)
    return (
        <li>{pet.type} : {pet.description} </li>
    )
}

export default Pet;
