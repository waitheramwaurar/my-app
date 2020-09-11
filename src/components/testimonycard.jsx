import React from "react";
import Picture from "./picture";
import Info from "./info"

function TestimonyCard(props){
    return (
        <div className = "card">
            <div  >
            <Picture img = {props.img} />

            </div>
            <div >
            <Info info = {props.name} />

            </div>
            <div >
            <Info sometext = {props.message} />

            </div>
        </div>
    )
}

export default TestimonyCard;