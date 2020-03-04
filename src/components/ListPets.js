import React, { useEffect, useState } from 'react';
import Pet from "./Pet"

const ListPets = props => {
    const [petType, setPetType] = useState([])

    useEffect(() => {
        fetch('/api/v1/pets')
        .then(response => {
            if (response.ok) {
              return response
            } else{
              let errorMessage = `${response.status} (${response.statusText})`, 
                error = new Error(errorMessage)
              throw(error)
            }
          })
            .then(response => response.json())
            .then(data => {
                setPetType(data)
            })
            .catch(error => {
                error.text().then(errorMessage => {
                    this.props.dispactch(displayError(errorMessage))
                })
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
        <div className="wrapper-animal">
          <div className="row">
            <div className="small-12 columns">
              <h2>Adoptable Pets</h2>
            </div>
            {listPets}
          </div>
        </div>
    )
}

export default ListPets;
