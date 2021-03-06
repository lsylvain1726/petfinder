import React from "react"
import { Link } from "react-router-dom"

const PetTypeTile = props => {
    return (
      <div className="small-12 medium-4 columns">
        <div className="card-pet">
          <div className="card-pet-header">
              <Link to={`/pets/${props.petType}/${props.id}`}><img src={props.img_url} /></Link>
          </div>
          <div className="card-pet-body">
            <h2>{props.name}</h2>
            <ul className="list-pettype-info">
              <li>Age: {props.age}</li>
              <li>{props.vaccination_status}</li>
            </ul>
          </div>
          <div className="card-pet-footer">
              <Link to={`/pets/${props.petType}/${props.id}`} className="button button-pettype-name">Meet {props.name}</Link>
          </div>
        </div>
      </div>
    );
}

export default PetTypeTile
