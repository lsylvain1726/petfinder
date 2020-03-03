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
        let petImage 
        if (pet.type === "dog") {
            petImage = "https://www.trendingbreeds.com/wp-content/uploads/2019/08/fitz_thedood_2-large.jpg"
        } else {
          petImage ="https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=HVqvfhtg" 
        }
        return (
            <Pet 
                petImage= {petImage} 
                key={pet.id}
                type={pet.type}
                description={pet.description}
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

