import React from "react";
import { Link } from "react-router-dom";

const Pet = props => {
  return (
    <div className="small-6 columns">
      <div className="card-animal">
        <div class="card-animal-body">
          <Link to={`/pets/${props.type}`}>
            <img src={props.petImage} alt={props.type} />
            <h2 className="card-animal-title">
              {props.type}: {props.description}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pet;
