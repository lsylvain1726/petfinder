import React, {useState} from "react"
import ErrorList from "./ErrorList"
import _ from 'lodash'

const AdoptionForm = (props) => {

  const defaultPetSubmitted = {
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: ""
  }

  const [petSubmitted, setPetSubmitted] = useState(defaultPetSubmitted)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState("")

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "phoneNumber", "email", "homeStatus"]
    requiredFields.forEach((field) => {
      if (petSubmitted[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handlePetAdoptionChange = event => {
    event.preventDefault()
    setPetSubmitted({
      ...petSubmitted,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handlePetAdoptionSubmit = event => {
    event.preventDefault()

    let formPayload = {
      name: petSubmitted.name,
      phoneNumber: petSubmitted.phoneNumber,
      email: petSubmitted.email,
      homeStatus: petSubmitted.homeStatus,
      applicationStatus: "pending",
      petType: props.animalType
    }

    if (validForSubmission()) {
      props.addAdoptablePet(formPayload)
      setMessage("Thank you for your adoption request. Your Request is in Process and someone from our team will reach out to you shortly")
      props.setShowForm(false)
      clearPetAdoptionForm()
    }
  }

  const clearPetAdoptionForm = () => {
    setPetSubmitted(defaultPetSubmitted)
  }

  const homeOptions = ["Own", "Rent Managed"]
  const homeStatusOptions = [""].concat(homeOptions).map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    )
  })

  let clickedClass
  if (props.showForm === true) {
    clickedClass = "show"
  } else {
    clickedClass = "hide"
  }

  let hideAdoptionMessage
  if(message) {
    hideAdoptionMessage = "show"
  } else {
    hideAdoptionMessage = "hide"
  }

  return (
    <div className="wrapper-form">
      <div className={hideAdoptionMessage}>
        <hr />
        <div className="row">
          <div className="small-12 columns">
            <div className="form-submission-message">
                {message}
            </div>
          </div>
        </div>
      </div>
      <div className={`adoption-form row ${clickedClass}`}>
        <hr />
        <h2>Adoption Form</h2>
        <form onSubmit={handlePetAdoptionSubmit}>
          <ErrorList errors={errors} />
          <div className="small-12 medium-6 columns">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={handlePetAdoptionChange} value={petSubmitted.name} />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" onChange={handlePetAdoptionChange} value={petSubmitted.phoneNumber} />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={handlePetAdoptionChange} value={petSubmitted.email} />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="homeStatus">Home Status</label>
            <select name="homeStatus" id="homeStatus" onChange={handlePetAdoptionChange} value={petSubmitted.homeStatus}>
              {homeStatusOptions}
            </select>
          </div>
          <div className="small-12 columns">
            <input type="submit" className="button button-submit" value="Adopt Me Please!" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdoptionForm