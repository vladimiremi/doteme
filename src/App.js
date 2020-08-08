import React from 'react';
import  logo  from './assets/logo.png';
import main from './assets/Main.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt=""/>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pets</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
        <h1>Adotp a pet and be happier! Some dog or cat...</h1>
          <div className="but">
          <button className="but1">Busque pets</button>
          <button className="but2">Adote pets</button>
          </div>
        
        </div>
        <img className="main" src={main} alt="main-doteme"/>

      </main>
    </div>
  );

}

export default App;
