import React, {Component} from "react";
import "../css/Music.css";
const youtubeMusic = ["38_PEYlDlKQ", "QyW7ztCiqXM", "-wiBRhX_QTU", "kNPtunJP3bI", "Uwh0fCaYs_4"]
var x = Math.floor(Math.random() * youtubeMusic.length)
var x = Math.floor(Math.random() * youtubeMusic.length)
class Music extends Component{
    constructor(props){
        super(props);
        this.state={
            link: youtubeMusic[x]
        }
        this.randomMusic = this.randomMusic.bind(this)
    }

    randomMusic(){
        var x = Math.floor(Math.random() * youtubeMusic.length)
        this.setState({
            link: youtubeMusic[x]
        })
    }


    render(){
        return(
            <div>
                <iframe width="360" height="315" src={`https://www.youtube.com/embed/${this.state.link}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <p class="fas fa-redo refresh-btn" onClick={this.randomMusic}></p>
            </div>
        )
    }

}

export default Music