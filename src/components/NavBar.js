import React from 'react'
import { Route, Link, Switch} from 'react-router-dom'
import PetTypesContainer from './PetTypesContainer'
import PetShowContainer from './PetShowContainer'
import ListPets from './ListPets'
import NotFound from './NotFound'



const NavBar = props =>{
    return(
        <div>
            <h1>HELLO TESTING HERE</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
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
            <Route exact path="/pets/:animalType/:id" component={PetShowContainer} />
            <Route exact path="/pets/:animalType" component={PetTypesContainer} />
            <Route path="*" component={NotFound} />
        </Switch>
        </div>
           
    )
}

export default NavBar;

