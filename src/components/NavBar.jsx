import React from 'react';
import AppNavLink from './AppNavLink';

function NavBar() {
  //  le rendu est conditionel :
  //   si l'écran est un téléphone (largeur d'écran plus grande que 425px), les liens de navigation seront des icônes; sinon ce sera du texte.

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 425;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <div className="nav-bar-div">
        <nav>
          <ul>
            <li>
              <AppNavLink navLinkDirection="/" navLinkActiveclassname="active" navLinkTxt="Accueil" />
            </li>
            <li>
              <AppNavLink navLinkDirection="/panier" navLinkActiveclassname="active" navLinkTxt="Mon panier" />
            </li>
            <li>
              <AppNavLink navLinkDirection="/contact" navLinkActiveclassname="active" navLinkTxt="Contact" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className="nav-bar-div">
      <nav>
        <ul>
          <li>
            <AppNavLink navLinkDirection="/" navLinkActiveclassname="active" navLinkIconClassName="fa-solid fa-house nav-bar-icon icon-display-none" />
          </li>
          <li>
            <AppNavLink navLinkDirection="/panier" navLinkActiveclassname="active" navLinkIconClassName="fa-solid fa-cart-shopping nav-bar-icon icon-display-none" />
          </li>
          <li>
            <AppNavLink navLinkDirection="/contact" navLinkActiveclassname="active" navLinkIconClassName="fa-regular fa-comment-dots nav-bar-icon icon-display-none" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;