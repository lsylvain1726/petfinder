import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesContainer from "./PetTypesContainer"

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pets/:type" component={PetTypesContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
