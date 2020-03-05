import React, { useState } from "react"

const AddAPetForm = props => {
    const [newForm, setNewForm] = useState({})

    const handleChange = event => {
        setNewForm({
            ...newForm,
            [event.currentTarget.id]: event.currentTarget.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const isVaccinated = (newForm.vaccination_status === "true")
        let formPayload = {
            name: newForm.name,
            phone_number: newForm.phone_number,
            email: newForm.email,
            pet_name: newForm.pet_name,
            pet_age: newForm.pet_age,
            pet_type_id: newForm.pet_type_id,
            pet_image_url: newForm.pet_image_url,
            vaccination_status: isVaccinated,
            application_status: "pending"
        }
        props.addNewForm(formPayload)
        setNewForm({})
    }

    return (
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
            <select name="pet_type_id" id="pet_type_id" type="number" onChange={handleChange} value= {newForm.pet_type}>
                <option value="1">Dog</option>
                <option value="2">Cat</option>
            </select>

            <label>Pet Image</label>
            <input name="pet_image_url" id="pet_image_url" type="text" onChange={handleChange} value={newForm.pet_image} />

            <label>Vaccination Status</label>
            <select name="vaccination_status" id="vaccination_status" onChange={handleChange} value={newForm.vaccination_status}>
                <option value="true">Vaccinated</option>
                <option value="false">Not vaccinated</option>
            </select>

            <input name="button" type="submit" />
        </form>
    )
}

export default AddAPetForm