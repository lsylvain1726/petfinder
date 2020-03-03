import React, {useState, useEffect} from 'react'
import { Redirect } from "react-router-dom"
import PetShow from "./PetShow"
import AdoptionForm from "./AdoptionForm"

const PetShowContainer = (props) => {
  const [pet, setPet] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const petId = props.match.params.id
  const animalType = props.match.params.animalType

  const addAdoptablePet = (formPayload) => {
    fetch('/api/v1/pets/:animalType/:id', {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  useEffect(() => {
    fetch(`/api/v1/pets/${animalType}/${petId}`)
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
    .then(body => {
      setPet(body[0])
    })
    .catch(error => {
      //console.error(`Error in fetch: ${error.message}`)
      setShouldRedirect(true)
    })
  }, {})

  if (shouldRedirect) {
    return <Redirect to="/pets" />
  }

  return (
    <div>
      <PetShow
        pet={pet}
      />
      <AdoptionForm addAdoptablePet={addAdoptablePet} />
    </div>
  )
}

export default PetShowContainer