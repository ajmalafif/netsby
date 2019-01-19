import React from 'react'
import { Link } from 'gatsby'

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
  
  <nav className="dt w-100 border-box pv3 wrap" role="navigation" aria-label="main-navigation">
    <div className="dib w-100 w-25-ns tl-ns tc">
      <Link to="/" className="f4 mb0 dark-gray link logo" title="Ajmal Afif">
          @ajmalafif
      </Link>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
      </div>
  </nav>
  )}
}

export default Navbar
