import React from "react";
import { Link } from "react-router-dom";


const AllItems=()=>{

    return(
        <div>
         <h1> Item List</h1>
         <ul>
            <li><Link to="/items/1">Item1</Link></li>
            <li><Link to="/items/2">Item2</Link></li>
            <li><Link to="/items/3">Item3</Link></li>
         </ul>
        </div>
    )
}

export default AllItems;