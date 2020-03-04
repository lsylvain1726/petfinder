import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const PetTypeTile = props => {
    return (
      <div>
        <Link to={`/pets/${props.id}`}><img src={props.img_url} /></Link>
        <br />
        <Link to={`/pets/${props.id}`}>{props.name}</Link>
        <p>Age: {props.age}</p>
        <p>Vaccination Status: {props.vaccination_status}</p>
        <br />
        <br />
      </div>
    );
}

export default PetTypeTile
