import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header.js';
import Button from 'antd/lib/button';
import Menu from 'antd/lib/button';

class App extends Component {
  render() {
    return (
      <div className="mainSection">
        <Header />
        <audio autoPlay>
          <source src="welcome.mp3" />
        </audio>
        <div className="welcome">
          Welcome to Nuutopia. We are glad that you are part of our the community. Help your neighbors by completing tasks they share. Keep our community healthy by helping your neighbors today.
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
