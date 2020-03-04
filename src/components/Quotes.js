import React, { Component } from "react";
import "../css/Quotes.css";
import "../css/Music.css";

const quotes = ["Who you are, what you think, feel, and do, what you love—is the sum of what you focus on ~Gallagher", ]

var x = Math.floor(Math.random() * quotes.length);
var y = quotes[x];

class Quotes extends Component{
    constructor(props){
        super(props);
        this.state={
            number: " "
        }
        this.randomQuotes = this.randomQuotes.bind(this)
    }

    randomQuotes(){
        this.setState({number: y})
    }

    render(){
        return(
            <div>
                {this.state.number === y ? 
                <p ><b>Quote of the day:</b> <i>{y}</i></p> :
                <button class="quotes btn quote-btn" onClick={this.randomQuotes}>Quote of the Day</button>
                }
            </div>
        )
    }
}

export default Quotes