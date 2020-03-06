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
    setMessage("Thank you for your form submission. Your surrender request is in process and someone from our team will reach out to you shortly")
  }

  let showHideForm
  if (props.showForm === true) {
    showHideForm = "show"
  } else {
    showHideForm = "hide"
  }

  let hideMessage
  if(message) {
    hideMessage = "show"
  } else {
    hideMessage = "hide"
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

      <div className="row">
        <div className="small-12 columns">
          <div className="surrender-pet-info">
            <p>We understand how difficult a decision this must be to surrender your pet. We will do everything in our power to find a new family with a great home for your pet. In the meantime, they will be in the care of our staff and we will treat them as if they are a part of our family.</p>
          </div>
        </div>
      </div>

      <hr />

      <div className={hideMessage}>
        <div className="row">
          <div className="small-12 columns">
            <div className="form-submission-message">
              {message}
            </div>
          </div>
        </div>
      </div>

      <div className={`add-a-pet-form row ${showHideForm}`}>
        <div className="small-12 columns">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="small-12 medium-6 columns">
              <label>Name</label>
              <input name="name" id="name" type="text" onChange={handleChange} value={newForm.name} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>Phone Number</label>
              <input name="phone_number" id="phone_number" type="text" onChange={handleChange} value={newForm.phone_number} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>E-mail</label>
              <input name="email" id="email" type="text" onChange={handleChange} value={newForm.email} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>Pet Name</label>
              <input name="pet_name" id="pet_name" type="text" onChange={handleChange} value={newForm.pet_name} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>Pet Age</label>
              <input name="pet_age" id="pet_age" type="number" onChange={handleChange} value={newForm.pet_age} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>Pet Type</label>
              <select name="pet_type_id" id="pet_type_id" onChange={handleChange} value={newForm.pet_type_id}>
                <option value="1">Dog</option>
                <option value="2">Cat</option>
              </select>
            </div>
            <div className="small-12 medium-6 columns">
              <label>Pet Image</label>
              <input name="pet_image_url" id="pet_image_url" type="text" onChange={handleChange} value={newForm.pet_image_url} />
            </div>
            <div className="small-12 medium-6 columns">
              <label>Vaccination Status</label>
              <select name="vaccination_status" id="vaccination_status" onChange={handleChange} value={newForm.vaccination_status}>
                <option value="true">Vaccinated</option>
                <option value="false">Not vaccinated</option>
              </select>
            </div>
            <div className="small-12 columns">
              <input name="button" type="submit" className="button" />
            </div>
          </div>
        </form>
        </div>
      </div>
    </Fragment>   
  )
}

export default AddAPetForm