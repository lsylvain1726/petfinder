import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import ListPets from './ListPets';

const App = props => {
  
  return(
  <div>
    <NavBar/>
  <BrowserRouter>
    <Route exact path="/pets" component={ListPets} />
  </BrowserRouter>
  </div>
  
  )}

export default App
