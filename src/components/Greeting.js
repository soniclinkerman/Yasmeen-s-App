import React, {Component} from "react";
import "../css/Greeting.css"
const hello = ["Greetings", "Howdy", "Hello", "Bonjour", "Hola", "Salve", " Konnichiwa", "Guten Tag" ]

function randomGreet(){
    var x = Math.floor(Math.random() * hello.length)
    return(
        hello[x]
        )
   

}

function Greeting(){
    return(
        <div>
            <p className="greeting-head">{randomGreet()} Yasmeen</p>
        </div>
    )
}

export default Greeting