import React from 'react'
import { Route } from 'react-router-dom'
import Dogs from './Dogs'
import Cats from './Cats'
import Adoptable from './Adoptable'
import PetTypesContainer from './PetTypesContainer'


const NavBar = props =>{
    return(
        <div>
            <h3>Hello</h3>
            <ul>
            <Link to="/dogs">List Pets</Link>
            <Link to="/cats">CATS</Link>
            <Link to="/home">HOME</Link>
            <Link to="/adoptable">ADOPT ME!</Link>
            </ul>
       
        <Switch>
            <Route exact path="/" component={PetTypesContainer}/>   
            <Route exact path="/dogs" component={Dogs}/>
            <Route exact path="/cats" component={Cats}/>
            <Route exact path="/adoptable" component={Adoptable}/>
        </Switch>
        </div>
    )
}

export default NavBar;

