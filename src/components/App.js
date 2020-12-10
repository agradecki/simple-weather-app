import React, { Component } from 'react';
import ReactDOM from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {

    state = {
        value: "asdsa"
    }

render() {
return (
    <div className="App">
        <Form value={this.state.value}/>
        <Result />
    </div>
    );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
