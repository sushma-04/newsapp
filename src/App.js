import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(){
    super();
    console.log("This is Constructor")
  }

  componentDidMount()
  {
    console.log("Mount function")
  }
  render() {

    console.log("render function")
    return (
  
      <>
      <Navbar/>
      <News />
        My News App

      </>

    );
  }
}

