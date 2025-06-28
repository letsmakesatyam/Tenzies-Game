import React from "react";
import Die from "./Die";
export default function InnerContainer(){
    const [dice , setDice] = React.useState(allNewDice());
    function allNewDice(){
        let array = [];
        for(let i = 0 ; i<10;i++){
            let randomValue = Math.floor(Math.random() * 6);
            array.push(randomValue);
        }
        return(
            array

        )
    }
    const rowOneDieComponentsArray = dice.map((value)=>{
        return(
            <Die value = {value}/>
        )
    })
    function reloadGame(){
        setDice(allNewDice());
    }
   
    
    return(
        <div className = "inner-container">
            <div className="card">
                <div className="text-container">
                    <h1 className = "heading">Tenzies</h1>
                    <p className="para">Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                </div>
                <div className="die-container">
                    <div className="die-row">
                        {rowOneDieComponentsArray}
                    </div>
                    
                    
                    

                </div>
                <button onClick = {reloadGame} className="button">Roll</button>

            </div>

        </div>
    )
}