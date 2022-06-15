/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import shopingCart from './shopping-cart.png';
import search from './search.png';


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
                           Services
                        </a>
                   </li>
                   <li className="navlinks">
                       <a href="#" className="links">
                           Products
                       </a>
                   </li>
                   <li className="navlinks">
                       <a href="#" className="links">
                           Login | Register
                       </a>
                   </li>
               </ul>
               <div className="icon-cont">
               <div className="icon search-form-cont" >

                          <div className="search-form" id= "search-form">
                                   <form action="" >
                                <input type="text" name='search' placeholder='search' />
                                <input type="submit" name="submit" value="search" className='submit-btn'/>
                                   </form>
                             </div>
                                  <span>
                                    <img src={search} alt="shoppingCart"  id="search"/>
                                    </span>
   
                          </div>
                </div>
                   <div className="icon icon-cart" >
                      <a href="#">
                      <img src={shopingCart} alt="shoppingCart" id="cart"/>
                      </a>
                      
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

  