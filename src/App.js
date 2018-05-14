import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './Components/MyLabel.css';
// import './Components/MyButton.css';

class MyButton extends Component {
  render() {
    return <button onClick={() => {this.props.handleclick(this.props.label);}}>
      {this.props.label}
    </button>
  }
}

class MyLabel extends Component {
  render() {
    return <p>Cliquei no: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({labelText});
  }

  render() {
    return (
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <MyButton handleclick={this.setLabelText} label="Botão1"/>
        <MyButton handleclick={this.setLabelText} label="Botão2"/>
        <MyButton handleclick={this.setLabelText} label="Botão3"/>
        <MyButton handleclick={this.setLabelText} label="Botão4"/>        
      </div>
    );
  }
}

export default App;
