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
        <div className="card-pet-info">
          <ul className="list-pet-info">
            <li><img src={props.pet.img_url} alt={props.pet.name}/></li>
            <li><span className="pet-info-title">Name:</span> {props.pet.name}</li>
            <li><span className="pet-info-title">Age:</span>  {props.pet.age}</li>
            <li><span className="pet-info-title">Vaccination Status:</span>  {vaccinated}</li>
            <li><span className="pet-info-title span-block">Adoption Story:</span>{props.pet.adoption_story}</li>
          </ul>
          <div onClick={props.adoptMeClicked} className="button-wrapper">
            <Link className={`button`} onClick={props.showForm} to="#">Adopt Me!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetShow