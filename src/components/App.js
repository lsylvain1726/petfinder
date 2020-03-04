import React, { Fragment } from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"
import PetShowContainer from "./PetShowContainer"
import NotFound from "./NotFound"
import ListPets from './ListPets';
import Footer from './Footer'

const App = props => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pets" component={ListPets} />
          <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
          <Route exact path="/pets/:animalType" component={PetTypesContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}


export default App
