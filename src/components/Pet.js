import React from 'react';
import { Link } from 'react-router-dom'

const Pet = props => {
    return (
        <div className="small-6 columns">
          <div className="card-animal">
            <div class="card-animal-body">
              <Link to="/pets">
                  <img src={props.petImage} alt={props.type} /> 
              </Link>
              <Link className="button button-card-animal" to="/pets">
                  <span className="card-animal-title">Meet Our {props.type}</span>   
                  <span class="card-animal-subtitle">{props.description}</span>
              </Link>
            </div>
          </div>
        </div>  
    )
}

export default Pet;
