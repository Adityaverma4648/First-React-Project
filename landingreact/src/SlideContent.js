import './SlideContent.css';
import tea from './tea.jpg';
import camera from './camera.jpg';
import earpods from './earpods.jpg';
import sandals from './sandals.jpg';


function SlideContent(){

    return (
         <div className="container">
                              
                     <div className="con con-1">
                            <h4>
                                Best Sellers
                            </h4>
                            <img src={sandals}alt="products" />
                            <br />
                            <span className="see-more">
                                See More
                            </span>

                     </div>
                     <div className="con con-2">
                               <h4>
                                   Best Sellers</h4>        

                         <img src= {camera} alt="products" />
                         <br />
                         <span className="see-more">
                             See More
                         </span>
                     </div>  
                     <div className="con con-3">
                               <div className="con-content">
                               <h4>
                                   Best Sellers</h4>         
                                   <img src= {earpods} alt="products" />
                                   <br />
                                   <span className="see-more">
                                       See More
                                   </span>
                               </div>
                               <br />
                               <div className="con-content">
                               <h4>
                                   Best Sellers</h4>         
                                   <img src= {earpods} alt="products" />
                                   <br />
                                   <span className="see-more">
                                       See More
                                   </span>
                               </div>
                     </div>  
                     <div className="con con-4">
                         <h4>
                            Best Sellers
                         </h4>
                         <img src={tea} alt="products" />
                         <br />
                         <span className="see-more">
                            See More
                         </span>
                     </div>  

         </div>
    );
}
export default SlideContent;