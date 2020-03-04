import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import AddAPetContainer from "./AddAPetContainer"
import NotFound from "./NotFound"
import ListPets from './ListPets';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={ListPets} />
        <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
        <Route exact path="/pets/:type" component={PetTypesContainer} />
        <Route exact path="/adoptions/new" component={AddAPetContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
