import React from 'react';
import './App.scss';
import logo from './logo.png';
import Searchbar from './components/Searchbar/Searchbar';
import Definition from './components/Definition/Definition';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';
import Owlbot from 'owlbot-js';

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      result: {}
    }
    this.client = Owlbot('6ece4df46b4e016cf8fb8e08758d7db27ee10f11');
  }

  componentDidMount() {
    this.client.define('owl').then(data => {
      this.setState({ result: data });
    });
  }

  componentDidCatch() {
    console.log("error");
  }

  onSearch = () => {
    const { word } = this.state;
    if (word) {
      this.client.define(word).then(data => {
        this.setState({ result: data });
      }).catch(() => {
        this.setState({ result: "error" });
      });
    }
  }

  onChangeInput = event => {
    this.setState({ word: event.target.value });
  }

  render() {
    const { result } = this.state;
    return (
      <main className="mw8 w-100 ml-auto mr-auto">
        <Particles className="particles" params={particleOptions} />
        <header className="white br2">
          <h1 className="f1">Decify</h1>
          <img src={logo} alt="logo" className="w4" />
          <h2>find any english word you like, and get detailed information about it</h2>
        </header>
        <Searchbar onSearch={this.onSearch} onChange={this.onChangeInput} />
        <Definition result={result} />
        <Footer />
      </main>
    );
  }
}

export default App;
