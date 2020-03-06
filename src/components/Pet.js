import React from "react";
import { Link } from "react-router-dom";

const Pet = props => {
    return (
        <div className="small-12 medium-6 columns">
          <div className="card-animal">
            <div className="card-animal-body">
              <Link to={`/pets/${props.type}`}>
                  <img src={props.petImage} alt={props.type} /> 
              </Link>
              <Link className="button button-card-animal" to={`/pets/${props.type}`}>
                  <span className="card-animal-title">Meet Our <span className="capitalize">{props.type}s</span></span>   
                  <span className="card-animal-subtitle">{props.description}</span>
              </Link>
            </div>
          </div>
        </div>  
    )
}

export default Pet;
