import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"

const App = props => {
  return (
    <div>
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
   </div>
  
)}

export default App
