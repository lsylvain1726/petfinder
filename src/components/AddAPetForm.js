import React, {useState} from "react"

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
            pet_type: newForm.pet_type,
            pet_image_url: newForm.pet_image_url,
            vaccination_status: isVaccinated,
            application_status: "pending"
        }
        props.addNewForm(formPayload)
        setNewForm({})
    }

    return (
        <form>
            <label>Name</label>
            <input name="name" id="name" type="text" />

            <label>Phone Number</label>
            <input name="phone_number" id="phone_number" type="text" />

            <label>E-mail</label>
            <input name="email" id="email" type="text" />

            <label>Pet Name</label>
            <input name="pet_name" id="pet_name" type="text" />

            <label>Pet Age</label>
            <input name="pet_age" id="pet_age" type="number" />

            <label>Pet Type</label>
            <select name="pet_type_id" id="pet_type_id">
                <option value="1">Dog</option>
                <option value="2">Cat</option>
            </select>

            <label>Pet Image</label>
            <input name="pet_image_url" id="pet_image_url" type="text" />

            <label>Vaccination Status</label>
            <select name="vaccination_status" id="vaccination_status">
                <option value="true">Vaccinated</option>
                <option value="false">Not vaccinated</option>   
            </select>

            <input name="button" type="submit" />
        </form>
    )
}

export default AddAPetForm