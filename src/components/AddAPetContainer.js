import React, { useState, useEffect } from "react"
import AddAPetForm from "./AddAPetForm"

const AddAPetContainer = props => {

    const addNewForm = formPayload => {
        fetch("/api/v1/surrenderedpets", {
            method: "POST",
            body: JSON.stringify(formPayload),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => {
                if (response.ok) {
                    return response
                } else {
                    let errorMessage = `${response.status} (${response.statusText})`,
                        error = new Error(errorMessage)
                    throw error
                }
            })
            .then(response => {
                response.json()
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

    return (
        <AddAPetForm addNewForm={addNewForm} />
    )
}
export default AddAPetContainer