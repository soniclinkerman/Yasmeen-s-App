import React from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './components/Time';
import Greeting from './components/Greeting';
import Music from './components/Music';
import Announcement from './components/Announcement';
import Quotes from './components/Quotes';
import Day from './components/Day';
import Yasmeen from "./Yasmine-Img.jpg";

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Day/>
      <img src={Yasmeen} className="logo"/>
      <Time/>
      <Quotes/>

      <Music/>
      <Announcement/>

    
    </div>
  );
}

export default App;
