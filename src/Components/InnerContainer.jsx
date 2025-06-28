import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"

export default function InnerContainer(){
    const [dice , setDice] = React.useState(allNewDice());
    function allNewDice(){
        let array = [];
        for(let i = 0 ; i<10;i++){
            let randomValue = Math.floor(Math.random() * 6);
            array.push({
                id : nanoid(), 
                value : randomValue,
                isHeld : false
            });
        }
        return(
            array

        )
    }
    function handleClick(id){
        setDice((prevDie)=>{
            return prevDie.map((item)=>{
                return item.id === id ? {...item , isHeld : !prevDie.isHeld} : {...item}
            })
        })


    }
    const rowOneDieComponentsArray = dice.map((object)=>{
        return(
            <Die handleClick = {handleClick} key = {object.id} id = {object.id}  value = {object.value} isHeld = {object.isHeld}/>
        )
    })
    function rollDice(){
        
        setDice((oldArray)=>{
            return oldArray.map((item)=>{
              return   item.isHeld ? item : {id: nanoid() , value: Math.floor(Math.random() * 6) , isHeld : false}
            })
        })

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
                <button onClick = {rollDice} className="button">Roll</button>

            </div>

        </div>
    )
}