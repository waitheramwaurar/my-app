import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Heading(){
    return (
        <div className = "heading">
            <h1 className = "brand">Moodshopping &nbsp; 
            <ShoppingCartOutlinedIcon color="gold" fontSize= "large"/></h1>
            <nav>
                <li className="nav-list"><a href="">About Us</a></li>
                <li className="nav-list"><a href="">Contact</a></li>
                <li className="nav-list"><a href="">Sign up</a></li>
            </nav>
        </div>

    );
    
}


export default Heading;