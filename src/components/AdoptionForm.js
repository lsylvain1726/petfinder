import Reach, {useState, useEffect} from 'react'

const AdoptionForm = props => {
    return (
        <form>
            <label>Name</label>
            <input name="name" id="name" type="text" />

            <label>Phone Number</label>
            <input name="phone_number" id="phone_number" type="text" />

            <label>E-mail</label>
            <input name="email" id="email" type="text" />

            <label>Home Status</label>
            <select name="home_status" id="home_status">
                <option value="owner">I own the home that I live in.</option>
                <option value="renter">I rent the home that I live in.</option>
            </select>
        </form>
    )
}

export default AdoptionForm