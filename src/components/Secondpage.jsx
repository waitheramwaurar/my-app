import React from "react";

function SecondPage(){
    return (
        <div className = "second-page">
            
            <div className= "row">
                <hr/>
                <div className="col-lg-1 vertical-lines-1" ></div>
                <div className= "col-lg-5 col-md-6 who-we-are">
                    

                <h1 className="heading-pg-2" >Who We Are</h1>
                <p className= "description" >Moodshopping offers a well-curated range of fashion items for men and women depending on their mood.</p>
                <p className= "description" >We aim to provide an unforgettable shopping experience for all our customers.</p>
                <p className= "description">In our Do-It-Yourself section, we show you how to use the clothes you have, to make your own style.
                    Brand yourself with the help of Moodshopping, TODAY! 
                </p>
                <button className ="flashy-button btn-lg btn"><span className= "animate__animated animate__flash animate__infinite">Start DIY</span></button>

                </div>
                <div className="col-lg-1 vertical-lines-1" ></div>

                <div className="col-lg-4 col-md-6" >
                    <img className ="models-img" src="Images/black-models.jpg" alt="Models"/>
                </div>

                <div className="col-lg-1 vertical-lines-1" ></div>


            </div>
            
        </div>
    );
}

export default SecondPage;