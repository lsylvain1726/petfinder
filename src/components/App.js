import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"

import ListPets from './ListPets';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
