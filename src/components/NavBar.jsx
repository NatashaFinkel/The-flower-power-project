// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar-div">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              <i className="fa-solid fa-house nav-bar-icon icon-display-none"></i>
              <p>Accueil</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/bouquets-sauvegardés" activeclassname="active">
              <i className="fa-regular fa-heart nav-bar-icon icon-display-none"></i>
              <p>Vos bouquets</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeclassname="active">
              <i className="fa-regular fa-comment-dots nav-bar-icon icon-display-none"></i>
              <p>Contact</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/connexion" activeclassname="active">

              <i className="fa-solid fa-person-walking-arrow-right nav-bar-icon icon-display-none"></i>
              <p>Déconnexion</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
