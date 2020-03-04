import React from "react"
import { Link } from "react-router-dom"

const PetShow = (props) => {
  let vaccinated = ""

  if ( props.pet.vaccination_status === true) {
    vaccinated = "Vaccinated"
  } else {
    vaccinated = "Not Vaccinated"
  }

  return (
    <div className="row">
      <div className="columns small-12">
        <div className="wrapper-pet-info">
          <ul className="list-pet-info">
            <li><img src={props.pet.img_url} alt={props.pet.name}/></li>
            <li>Name: {props.pet.name}</li>
            <li>Age: {props.pet.age}</li>
            <li>Vaccination Status: {vaccinated}</li>
            <li>Adoption Story: {props.pet.adoption_story}</li>
          </ul>
          <div className="button-wrapper">
            <Link className="button" to="#">Adopt Me!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetShow
