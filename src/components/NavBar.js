import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import PetTypesContainer from "./PetTypesContainer";
import PetShowContainer from "./PetShowContainer";
import ListPets from "./ListPets";
import NotFound from "./NotFound";

const NavBar = props => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pets">HOME</Link>
            </li>
            <li>
              <Link to="/pets/dog">DOGS</Link>
            </li>
            <li>
              <Link to="/pets/cat">CATS</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/pets" component={ListPets} />
          <Route exact path="/pets/:type" component={PetTypesContainer} />
          <Route
            exact
            path="/pets/:animalType/:id"
            component={PetShowContainer}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
