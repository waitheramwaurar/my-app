import React from "react";
import Heading from "./Heading";
import FirstPage from "./FirstPage";
import SecondPage from "./Secondpage";
import ThirdPage from "./Thirdpage";
import WhatWeOffer from "./whatweoffer";
import LastPage from "./Lastpage";
// import { useState } from "react";


function App(){
    // const [name, setName] = useState(false);

    // function handleNameWritten(event){

    
    // }

    return (
    <div>
        {/* <div>
    <p>Hello there {name}! Tell us your name</p>
        <form action="">
            <input onChange={handleNameWritten} type="text" placeholder= "What's your name?"/>
        </form>
        </div> */}
        
     <Heading />
     <FirstPage />
     <SecondPage /> 
     <WhatWeOffer />
     <ThirdPage />
     <LastPage />

    </div>
    
    );
}

export default App;
