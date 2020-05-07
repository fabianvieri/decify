import React from 'react';
import './App.scss';
import logo from './logo.png';

function App() {
  return (
    <main className="ba mw8 w-100 ml-auto mr-auto">
      <header className="">
        <h1 className="f1">Decify</h1>
        <img src={logo} alt="logo" className="w4" />
        <p className="f4">Et ligula ullamcorper malesuada proin
        Phasellus egestas tellus rutrum tellus
        Sit amet cursus sit amet
        Lorem mollis aliquam ut porttitor
        Elit scelerisque mauris pellentesque pulvinar. </p>
      </header>
      <div className="pa4 ba">
        <input type="text" className="pa1 w-80" />
        <button type="button" className="pa2 w-20">find</button>
      </div>
      <div className="pa6 bg-black-80">

      </div>
      <footer className="pa4 bg-dark-red">

      </footer>
    </main>
  );
}

export default App;
