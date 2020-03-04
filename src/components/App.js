import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import ListPets from './ListPets'
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"

const App = props => {
  return (
    <div>
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
   </div>
  
)}

export default App
