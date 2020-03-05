import React, { Fragment } from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"
import ListPets from './ListPets';
import Footer from './Footer'
import AddAPetContainer from "./AddAPetContainer"

const App = props => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pets" component={ListPets} />
          <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
          <Route exact path="/pets/:type" component={PetTypesContainer} />
          <Route exact path="/adoptions/new" component={AddAPetContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

export default App
