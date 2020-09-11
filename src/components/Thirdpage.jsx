import React from "react";
import testimonials from "./testimonials";
import TestimonyCard from "./testimonycard";

// function createTestimony(testimony){
//     return (
//         <TestimonyCard 
//         key = {testimonials.id}
//         img = {testimonials.imageurl}
//         name = {testimonials.name}
//         message = {testimonials.testimony}
//         />
//     )
// }


function ThirdPage(props){
return (
    <div className= "third-page" >
        <hr/>
        <div className = "row">
            <div className="col-lg-3" >
                <h1 className= "third-heading" >Moodshopping Experience...</h1>
            </div>
            <div className="col-lg-3" >
                <TestimonyCard 
                img = {testimonials[0].imageurl}
                name = {testimonials[0].name}
                message = {testimonials[0].testimony}
                />
            </div>
            <div className="col-lg-3" >
                <TestimonyCard 
                img = {testimonials[1].imageurl}
                name = {testimonials[1].name}
                message = {testimonials[1].testimony}
                />
            </div>
            <div className="col-lg-3" >
                <TestimonyCard 
                img = {testimonials[2].imageurl}
                name = {testimonials[2].name}
                message = {testimonials[2].testimony}
                />
            </div>
            

        </div>
    </div>
)
}

export default ThirdPage;