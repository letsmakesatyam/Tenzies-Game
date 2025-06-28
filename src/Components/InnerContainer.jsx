import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"
import confetti from "canvas-confetti";

function fullScreenConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}





export default function InnerContainer(){
    
    const [dice , setDice] = React.useState(allNewDice());
    const [tenzies , setTenzies] = React.useState(false);
    React.useEffect(()=>{
        let value2 = dice[0].value;
        if(dice.every((object)=>{
            return object.value  === value2;
        }) &&dice.every((object)=>{
            return  object.isHeld === true ;
        }) ){
            setTenzies(true);
            console.log("You Won");
            confetti(); 
        }

    }, [dice])
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
        if(!tenzies){
            setDice((oldArray)=>{
            return oldArray.map((item)=>{
              return   item.isHeld ? item : {id: nanoid() , value: Math.floor(Math.random() * 6) , isHeld : false}
            })
        })
        }
        else{
            setTenzies(false)
            setDice(allNewDice());
        }
        
        

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
                <button onClick = {rollDice} className="button">{tenzies ?"New Game" : "Roll"}</button>
                {tenzies && <h1 className="won-text">You Won</h1>}

            </div>

        </div>
    )
}