import React, {useState, useEffect} from 'react'
import PetTypeTile from './PetTypeTile'

const PetTypesContainer = props => {
    const [showPets, setShowPets] = useState([])

    useEffect(() => {
      const petType = props.match.params.type;
      fetch(`/api/v1/pets/${petType}`)
          .then(response => {
            if (response.ok) {
              return response
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
              throw error
            }
          })
          .then(response => response.json())
          .then(data => {
            setShowPets(data)
          })
          .catch(error => {
            console.error(`Error in fetch: ${error.message}`)
          });
    },[])

    const petTypeTiles = showPets.map(pet => {
        let vaccination_status = ""
        if (pet.vaccination_status === true) {
          vaccination_status = "Vaccinated"
        } else {
          vaccination_status = "Not vaccinated"
        }

        let petType
        if (pet.type_id === 1) {
          petType = "dog"
        } else if (pet.type_id === 2) {
          petType = "cat"
        }
        return (
            <PetTypeTile
              key={pet.id}
              id={pet.id}
              name={pet.name}
              img_url={pet.img_url}
              age={pet.age}
              vaccination_status={vaccination_status}
              adoption_story={pet.adoption_story}
              adoption_status={pet.adoption_status}
              type_id={pet.type_id}
              petType={petType}
            />
        );
    })

    return (
      <div>
        {petTypeTiles}
      </div>
    );
}

export default PetTypesContainer
