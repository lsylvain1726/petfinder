import React, {useState, useEffect, Fragment} from 'react'
import { Redirect } from "react-router-dom"
import PetShow from "./PetShow"
import AdoptionForm from "./AdoptionForm"

const PetShowContainer = (props) => {
  const [pet, setPet] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [showForm, setShowForm] = useState(false)

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
      setShouldRedirect(true)
    })
  }, {})

  if (shouldRedirect) {
    return <Redirect to="/pets" />
  }

  let adoptMeClicked = () => {
    setShowForm(true)
  }

  return (
    <Fragment>
      <div className={`wrapper-interior-header wrapper-interior-animal`}>
        <div className="row">
          <div className="small-12 columns">
            <h1 className="pet-header-title">Meet {pet.name}</h1>
          </div>
        </div>
      </div>
      <div className="wrapper-individual-pet">
        <PetShow
          pet={pet}
          adoptMeClicked={adoptMeClicked}
        />
        <AdoptionForm 
          addAdoptablePet={addAdoptablePet} 
          animalType={animalType}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      </div>
    </Fragment>
  )
}

export default PetShowContainer