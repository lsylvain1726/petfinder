import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"

import ListPets from './ListPets';

const App = props => {
<<<<<<< HEAD
  
  return(
  <div>
  <BrowserRouter>
    <Route exact path="/pets" component={ListPets} />
  </BrowserRouter>
  </div>
  
  )}
=======
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
>>>>>>> d8fd7e2b5b56562f23f10803da501ae9fe1231f8

export default App
