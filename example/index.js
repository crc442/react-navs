import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello from '../src'

class App extends Component {
  render() {
    return <div>
      <Hello />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))