import React from "react"

const Header = (props) => {
  return (
    <div className="wrapper-topbar">
      <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="responsive-menu">
        <div className="row">
          <div className="small-12 columns">
            <div className="top-bar-left">
              <img src="http://localhost:3000/assets/images/fluffy-logo.png" alt="Fluffy Meets Cuddles Logo"/>
            </div>

          
            <div className="top-bar-right">
            <ul className="dropdown menu" data-dropdown-menu>
                <li>
                  <a href="#0">Home</a>
                </li>
                <li><a href="#0">Dogs</a></li>
                <li><a href="#0">Cats</a></li>
                <li><a href="#0">Surrender Application</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header