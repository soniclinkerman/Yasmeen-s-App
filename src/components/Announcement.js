import React, { Component } from "react";
import "../css/Music.css";
const announcment = [{
    date: "3/2/20",
    features: "I can say Hello in 8 different languages!" + "\r\n"
    + "Added 5 of your favorite songs to music player!"

}]

class Announcements extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    feat(){
        alert(
            "Hello! It's nice to meet you! I'm YOUR app! I'll be updated from time to time and all you need to do is click this little button to see what's new about me!"
        )

        alert(
            "I might not have everything you want in me now, but that's where the fun comes in! You get to watch me grow!"
        )

        alert(
            "If you have any questions or want features added/removed, you know who to talk to (◕‿◕✿"
        )
        alert(
            "Date: " + [announcment[0].date] + "\r\n" +
            "Features: " + "•" + [announcment[0].features] + "\r\n" 


        )
    }

    render(){
    
    return(
        <div>
            <button class="btn btn-announcements" onClick={this.feat}>?</button>

        </div>
    )

    }
    
}

export default Announcements