import React from "react";

function Info(props){
return <div>
    <h5 className= "details person-name">{props.info}</h5>
    <p className= "details the-words">{props.sometext}</p>
</div>
}

export default Info;