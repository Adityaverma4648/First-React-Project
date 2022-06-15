/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.css';
// import headphone from './headphones.jpg';
// import shoes from './shoes.jpg';
// import cosmetics from './cosmatics.jpg';
import CategoryDropdown from './CategoryDropdown';


    function Menu() {
        return (
               <section className="menu">
                        <div className="row-1">
                                <span>
                                <strong>
                                Fashion
                                </strong>
                                </span>
                                 <ul>
                                     <li className="children">
                                       <CategoryDropdown title="Children" />
                                     </li>
                                     <li className="children">
                                         <a href="#">Women</a>
                                     </li>
                                     <li className="children">
                                         <a href="#">Mens</a>
                                     </li>
                                     <li className="children">
                                         <a href="#">Trending</a>
                                     </li>
                                      
                                 </ul>
                                 <span className="del">
                                     <a href="#">
                                     ContactLess Delivery and 30 days return
                                     </a>
                                 </span>
                                 
                        </div>

               </section>
        );
      }


      
      export default Menu;