import React, { Component } from "react";
import "../css/Day.css"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var day;
switch(new Date().getDay()) {
    case (0):
        day = days[0];
        break;

    case (1):
        day = days[1];
        break;

    case (2):
        day = days[2];
        break;

    case (3):
        day = days[3];
        break;

    case (4):
        day = days[4];
        break;
    
    case (5):
        day = days[5];
        break;
    
    case (6):
        day = days[6];
        break;

        
}


class Day extends Component{
    constructor(props){
        super(props);
        this.state = {
            weekdays: 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.newDate(),
            1
        );
    }

    newDate(){
        this.setState({weekdays: day})
    }

    render(){
        return(
            <div>
                <h2 class="Day">Today is {this.state.weekdays}</h2>

            </div>
        )
    }
}

export default Day