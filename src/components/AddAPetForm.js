import React, { useState, Fragment } from "react"

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
    <Fragment>

      <div className={`wrapper-interior-header wrapper-interior-animal`}>
        <div className="row">
          <div className="small-12 columns">
            <h1 className="pet-header-title">Surrender Your Pet</h1>
          </div>
        </div>
      </div>

      <div className="form-submission-message">
        {message}
      </div>

      <div className="row">
        <div className="small-12 columns">
          <div className="surrender-pet-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="small-12 columns">
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

              <input name="button" type="submit" className="button" />
            </form>
            </div>
        </div>
      </div>
    </Fragment>   
  )
}

export default AddAPetForm