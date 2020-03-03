import React, {useState, useEffect} from 'react'
import { Redirect } from "react-router-dom"
import PetShow from "./PetShow"

const PetShowContainer = (props) => {
  const [pet, setPet] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const petId = props.match.params.id
  const animalType = props.match.params.animalType
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
    <PetShow
      pet={pet}
    />
  )
}

export default PetShowContainer