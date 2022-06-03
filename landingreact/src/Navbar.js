/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function Navbar() {
    return (
        <nav className="navbar">
               <div className="navbar-brand">
                   LOGO    
               </div> 
               <ul className="navlists">
                   <li className="navlinks">
                       <a href="#" className="links">
                           Home
                       </a>
                   </li>
                   <li className="navlinks">
                       <a href="#" className="links">
                           About
                        </a>
                   </li>
                   <li className="navlinks">
                       <a href="#" className="links">
                           Contacts
                       </a>
                   </li>
                   <li className="navlinks">
                       <a href="#" className="links">
                           Services
                       </a>
                   </li>
               </ul>
               <div className="icon-cont">
                   <div className="icon icon-cart" >
                       <img src="./image/shopping-cart.png" alt="cart" />
                   </div>
               </div>
               <div className="burgermenu media-css">
                   <span className="line"></span>
                   <span className="line"></span>
                   <span className="line"></span>
               </div>
        </nav>
    );
  }
  
  export default Navbar;

  