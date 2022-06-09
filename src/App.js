
import './App.css';
import React, { useState, useEffect } from 'react';
import phone from "./img/phone-clear.png"
import back from "./img/back.png"
import black from "./img/black phone.png"
import white from "./img/white phone.png"


function App() {

  //initialize offset at 0
  const [offset, setOffset] = useState(0);

  //log our offset
  useEffect(() => {
    console.log(offset)
  }, [offset])

  //check how far page has scrolled and set offset
  window.onscroll = () => {
    setOffset(window.pageYOffset)
  }

  let show = ""
  let upwards = 0
  let light = 0
  if (offset > 1600) {
    show = "back show"
  } else {
    show = "back"
  }

  if (offset > 2400){
    upwards = -2400 + offset
  }
  if (offset > 5400){
    light = -5400 + offset
  }

  let phoneStyles = {
    width: `${0 + offset/4}px`,
    margin: `0 auto`,
    transform: `translateY(${upwards/3}px)`,
    opacity: `${0 + offset/2000}`,
  }

  let backStyles = {
    margin: "0 auto",
    transform: `translateY(${upwards/3}px)`
  }
  let lit = {
    background: `rgba(${light/10},${light/10},${light/10},1)`
  }
  if (offset >= 6600) {
    return (
      <div className="App" style={lit}>
        <img className="phone1" src={white} alt=""/>
      </div>
    );
  } else if (offset<1600){
    return (
      <div className="App" style={lit}>
        <img style={phoneStyles} className="phone" src={phone} alt="" />
      </div>
    );
  } else {
    return (
      <div className="App" style={lit}>
        <img src={back} alt="" style={backStyles} className={show} />
        <img alt="" style={phoneStyles} className="phone" src={phone} />
      </div>
    );
  }
}

export default App;
