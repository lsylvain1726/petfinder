import React, { useEffect, useState, Fragment } from 'react';
import Pet from "./Pet"
import HeroHeader from "./HeroHeader"

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
          petImage = "http://localhost:3000/assets/images/doogle-home.jpg"
        } else {
          petImage ="http://localhost:3000/assets/images/kitten-home.jpg" 
        }
        return (
            <Pet 
                petImage= {petImage} 
                key={pet.id}
                id={pet.id}
                type={pet.type}
                description={pet.description}
            />
        )
    })

    return (
        <Fragment>
          <HeroHeader />
          <div className="wrapper-animal">
            <div className="row">
              <div className="small-12 columns">
                <h2 className="wrapper-animal-title">Our Adoptable Pets</h2>
              </div>
              {listPets}
            </div>
          </div>
        </Fragment>
    )
}

export default ListPets;
