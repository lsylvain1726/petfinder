import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const PetTypeTile = props => {
    return (
      <div>
        <Link to={`/pets/${props.petType}/${props.id}`}><img src={props.img_url} /></Link>
        <br />
        <Link to={`/pets/${props.petType}/${props.id}`}>{props.name}</Link>
        <p>Age: {props.age}</p>
        <p>Vaccination Status: {props.vaccination_status}</p>
        <p>Pet ID: {props.id}</p>
        <br />
        <br />
      </div>
    );
}

export default PetTypeTile
