import React from "react";


function WhatWeOffer(){
    return (
        <div className= "fourth-page">
            <hr/>

            <div className= "row" >
           

            <h1>What We Offer...</h1>

           
                <div className="clothes col-lg-4" >
                    <div className= "flip-box">
                    <div className= "flip-box-inner"> 
                    <div className="flip-box-front">
                    <img className="happy-clothes" src="Images/happyclothes.jpg" alt=""/>
                    </div>
                    <div className="flip-box-back">
                        <button type = "button" className= "clothes-btn btn btn-lg btn-dark">Check it out</button>

                    </div>
                    </div>
                    </div>
                    <p className="clothe-type" >Happy Clothes </p>
                </div>
                

                <div className="clothes col-lg-4">
                    <div className= "flip-box">
                        <div className= "flip-box-inner">
                            <div className="flip-box-front">
                            <img className= "just-there-clothes" src="Images/justthereclothes.jpg" alt=""/>

                            </div>
                            <div className="flip-box-back">
                        <button type = "button" className= "clothes-btn btn btn-lg">Check it out</button>
                        </div>
                    </div>
                    </div>
                    
                    <p className="clothe-type" >Clothes for your 'Just There' mood</p>
                    </div>
                

                

                <div className="clothes col-lg-4">
                    <div className= "flip-box">
                        <div className= "flip-box-inner" >
                            <div className="flip-box-front">
                            <img className = "accessories" src="Images/accessories.jpg" alt=""/>

                            </div>
                            <div className="flip-box-back">
                        <button type = "button" className= "clothes-btn btn btn-lg btn-dark">Check it out</button>
                        </div>
                    </div>
                    </div> 
                    <p className="clothe-type" >Accessories for your mood</p>
                  </div>

            {/* NOT WORKING ... WHY? ...I DON'T KNOW  */}

{/* <div id="carouselExampleFade" className="carousel slide carousel-fade" dataRide="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
<img   src="Images/happyclothes.jpg" className="clothes d-block w-100" alt="..." />
</div>
<div className="carousel-item">
<img  src="Images/justthereclothes.jpg" className="clothes d-block w-100" alt="..." />
</div>
<div className="carousel-item">
<img  src="Images/accessories.jpg" className="clothes d-block w-100" alt="..."></img>
</div>

</div>
<a className="carousel-control-prev" href="#carouselExampleFade" role="button" dataSlide="prev">
    <span className="carousel-control-prev-icon" ></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" dataSlide="next">
    <span className="carousel-control-next-icon" ></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
      
      </div>  

      <button className ="flashy-more-button btn-lg btn"><span className= "animate__animated animate__flash animate__infinite">More...</span></button>   
        </div>

    )
}

export default WhatWeOffer;