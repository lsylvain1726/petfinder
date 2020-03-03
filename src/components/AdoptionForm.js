import React, {useState} from "react"

const AdoptionForm = () => {

  const [petSubmitted, setPetSubmitted] = useState({
    name: "",
    phone_number: "",
    email: "",
    home_status: ""
  })

  const handlePetAdoptionChange = event => {
    setPetSubmitted({
      ...petSubmitted,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handlePetAdoptionSubmit = event => {
    event.preventDefault()

    let formPayload = petSubmitted
    

  }

  const clearPetAdoptionForm = event => {
    setPetSubmitted({
      name: "",
      phone_number: "",
      email: "",
      home_status: ""
    })
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handlePetAdoptionChange} value={petSubmitted.name} />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input type="text" name="phone_number" id="phone_number" onChange={handlePetAdoptionChange} value={petSubmitted.phone_number} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handlePetAdoptionChange} value={petSubmitted.email} />
        </div>

        <label htmlFor="home_status">Home Status</label>
        <select name="home_status" id="home_status" onChange={handlePetAdoptionChange} value={petSubmitted.home_status}>
          <option></option>
          <option>Own</option>
          <option>Rent Managed</option>
        </select>
        <input type="hidden" id="application_status" name="application_status" value="pending" />
        <input type="submit" className="button" value="Adopt Me Please!" />
      </form>
    </div>
  )
}

export default AdoptionForm