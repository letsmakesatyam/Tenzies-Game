import React from "react";
export default function Die(props){
    let styling = {
       backgroundColor:  props.isHeld && "#59E391" 
       
    }
    return(
        <div onMouseEnter={() => setCursor("pointer")}
  onMouseLeave={() => setCursor("default")}  onClick={()=>{props.handleClick(props.id)}} style = {styling} className="die-component">
            <h2>{props.value}</h2>

        </div>
    )
}