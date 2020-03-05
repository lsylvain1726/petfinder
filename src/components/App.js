import React, { Fragment } from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const App = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

export default App;
