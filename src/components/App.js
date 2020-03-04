import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import AddAPetContainer from "./AddAPetContainer"
import NotFound from "./NotFound"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={NotFound} />
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route exact path="/pets/:animalType" component={PetTypesContainer} />
        <Route exact path="/adoptions/new" component={AddAPetContainer} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
