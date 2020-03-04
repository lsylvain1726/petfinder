import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route path="*" component={NotFound} />
        <Route exact path="/pets/:animalType" component={PetTypesContainer} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
