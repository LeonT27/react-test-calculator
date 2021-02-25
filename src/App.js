import React, { Component } from 'react';
import Button from './components/Button';
import "nes.css/css/nes.css"
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '0',
      previous: [],
      nextIsReset: false
    };
  }

  calculate = (symbol) => {
    let {current, previous} = this.state;
    if(previous.length > 0) {
      current = eval(String(previous.join('') + current));
      this.setState({current, previous: [], nextIsReset: true})
    }
  }

  reset = () => {
    this.setState({current: '0', previous: [], nextIsReset: false});
  }

  addToCurrent = (symbol) => {
    if(["/", "-", "+", "*"].indexOf(symbol) > -1) {
      let {previous, nextIsReset} = this.state;
      if(nextIsReset) {
        previous.pop();
      }
      previous.push(this.state.current + symbol);
      this.setState({previous, nextIsReset: true});
    } else {
      if((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset){
        this.setState({current: symbol, nextIsReset: false});
      } else {
        this.setState({current: this.state.current + symbol});
      }
    }
  }

  render() {
    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset, class: "calc-button nes-btn is-warning"},
      {symbol: '/', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn is-primary"},
      {symbol: '7', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '8', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '9', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '*', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn is-primary"},
      {symbol: '4', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '5', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '6', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '-', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn is-primary"},
      {symbol: '1', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '2', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '3', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '+', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn is-primary"},
      {symbol: '0', cols: 2, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '.', cols: 1, action: this.addToCurrent, class: "calc-button nes-btn"},
      {symbol: '=', cols: 1, action: this.calculate, class: "calc-button nes-btn is-success"},
    ];

    return (
      <div className="App">
      {this.state.previous.length > 0 ? 
        <div className="floaty-last">{this.state.previous.join('')}</div>
      : null}
        <input readOnly={true} className="result nes-input" type="text" value={this.state.current} />

        {buttons.map((btn,i) => {
          return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} class={btn.class}/>
        })}
      </div>
    );
  }
}

export default App;
