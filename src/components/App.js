import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import ListPets from './ListPets';
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"

const App = props => {
  return (
    <div>
      <NavBar/>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route exact path="/pets" component={ListPets} />
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route path="*" component={NotFound} />
        <Route exact path="/pets/:animalType" component={PetTypesContainer} />
      </Switch>
    </BrowserRouter>
   </div>
  
)}


export default App
