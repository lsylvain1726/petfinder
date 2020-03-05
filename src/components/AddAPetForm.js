import React, { useState } from "react"

const AddAPetForm = props => {
  const defaultForm =  {
    name: "",
    phone_number: "",
    email: "",
    pet_name: "",
    pet_age: "",
    pet_type_id: "",
    pet_image_url: "",
    vaccination_status: "",
    application_status: ""
  }

  const [newForm, setNewForm] = useState(defaultForm)
  const [message, setMessage] = useState("")

  const handleChange = event => {
    setNewForm({
      ...newForm,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const isVaccinated = (newForm.vaccination_status === "true")

    let petTypeID
    if (newForm.pet_type_id === "1") {
      petTypeID = 1
    } else {
      petTypeID = 2
    }

    let formPayload = {
      name: newForm.name,
      phone_number: newForm.phone_number,
      email: newForm.email,
      pet_name: newForm.pet_name,
      pet_age: newForm.pet_age,
      pet_type_id: petTypeID,
      pet_image_url: newForm.pet_image_url,
      vaccination_status: isVaccinated,
      application_status: "pending"
    }
        
    props.addNewForm(formPayload)
    props.setShowForm(false)
    setNewForm(defaultForm)
    setMessage("Your Request is in Process")
  }

  let showHideForm
  if (props.showForm === true) {
    showHideForm = "show"
  } else {
    showHideForm = "hide"
  }

  return (
    <div>
      <div className="form-submission-message">
        {message}
      </div>
            
      <div className={`add-a-pet-form row ${showHideForm}`}>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" id="name" type="text" onChange={handleChange} value={newForm.name} />

          <label>Phone Number</label>
          <input name="phone_number" id="phone_number" type="text" onChange={handleChange} value={newForm.phone_number} />

          <label>E-mail</label>
          <input name="email" id="email" type="text" onChange={handleChange} value={newForm.email} />

          <label>Pet Name</label>
          <input name="pet_name" id="pet_name" type="text" onChange={handleChange} value={newForm.pet_name} />

          <label>Pet Age</label>
          <input name="pet_age" id="pet_age" type="number" onChange={handleChange} value={newForm.pet_age} />

          <label>Pet Type</label>
          <select name="pet_type_id" id="pet_type_id" onChange={handleChange} value={newForm.pet_type_id}>
            <option value="1">Dog</option>
            <option value="2">Cat</option>
          </select>

          <label>Pet Image</label>
          <input name="pet_image_url" id="pet_image_url" type="text" onChange={handleChange} value={newForm.pet_image_url} />

          <label>Vaccination Status</label>
            <select name="vaccination_status" id="vaccination_status" onChange={handleChange} value={newForm.vaccination_status}>
              <option value="true">Vaccinated</option>
              <option value="false">Not vaccinated</option>
            </select>

          <input name="button" type="submit" />
        </form>
      </div>
    </div>   
  )
}

export default AddAPetForm