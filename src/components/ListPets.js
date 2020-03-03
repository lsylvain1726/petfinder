import React, { useEffect, useState } from 'react';
import Pet from "./Pet"

const ListPets = props => {
    const [petType, setPetType] = useState([])
    useEffect(() => {
        fetch('/api/v1/pets')
            .then(response => response.json())
            .then(data => {
                setPetType(data)
            })
    }, [])

    const listPets = petType.map((pet) => {
        return (
            <Pet 
                key={pet.id}
                pet={pet}
            />
        )
    })

    return (
        <ul>
           {listPets}
        </ul>
    )
}

export default ListPets;


