import React from 'react'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'

const UnorderedList = tachyons("ul")`
dib w-100 w-75-ns tr-ns tc mt4 mt0-ns ph0
`

const List = tachyons("li")`
f5 dib mr4 mr4-ns
`

const HeaderLogo = tachyons("h1")`
f4 mb0
`

const Header = tachyons("header")`
  z-2 left-0 top-0 right-0 ph4-ns
`

const Nav = tachyons("nav")`
dt w-100 border-box pv3 wrap
`
const ContainerLogo = tachyons("div")`
dib w-100 w-25-ns tl-ns tc
`

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
     <Header>
    <Nav role="navigation" aria-label="main-navigation">
      <ContainerLogo>
        <HeaderLogo>
          <Link to="/" className="dark-gray link logo" title="Ajmal Afif">
            @ajmalafif
          </Link>
        </HeaderLogo>
      </ContainerLogo>
      <UnorderedList>
        <List>
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </List>
        <List>
          <Link className="navbar-item" to="/products">
            Experience
          </Link>
        </List>
        <List>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </List>
        <List>
          <Link className="navbar-item" to="/contact/examples">
            Blog
          </Link>
        </List>
      </UnorderedList>
    </Nav>
  </Header>
  )}
}

export default Navbar
