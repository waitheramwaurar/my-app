import React from "react";

const currentYear = new Date().getFullYear();

function LastPage(){
    return (
        <div className= "last-page">
            <hr/>

            <div className= "row" >
                <div className= "col-lg-4" >
                    <ul>
                        <li className="footer-list" ><a className = "footer-links" href="">New Arrivals</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Eccentric Taste</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Celebrity Inspos</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Random Inspos</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Shocking Inspos </a></li>
                    </ul>

                </div>
                <div className= "col-lg-4" >
                    <ul>
                        <li className="footer-list" ><a className = "footer-links" href="">Catchy DIY</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Stand Out</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Crazy Outfits</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Find your Taste</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Create your style</a></li>
                    </ul>

                </div>
                <div className= "col-lg-4" >
                    <ul>
                        <li className="footer-list" ><a className = "footer-links" href="">Feedback</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Shopper's reaction</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Customer Satisfaction </a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Recommendations</a></li>
                        <li className="footer-list" ><a className = "footer-links" href="">Top 5 DIY</a></li>
                    </ul>

                </div> 
             </div>

             <p className = "copyright">
                 &copy; Moodshopping {currentYear}
             </p>
        </div>

    )
}

export default LastPage;