import React from "react";
import Die from "./Die";
export default function InnerContainer(){
    return(
        <div className = "inner-container">
            <div className="card">
                <div className="text-container">
                    <h1 className = "heading">Tenzies</h1>
                    <p className="para">Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                </div>
                <div className="die-container">
                    <div className="die-row">
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>

                    </div>
                    <div className="die-row">
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>
                        <Die value = "1"/>

                    </div>
                    
                    

                </div>
                <button className="buttton">Roll</button>

            </div>

        </div>
    )
}