import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ScrollNav } from '../src'

const items = [
	{ id: 1, title: 'Home', url: '/home' },
	{ id: 2, title: 'About', url: '/about' },
	{ id: 3, title: 'Blog', url: '/blog' },
	{ id: 4, title: 'Portfolio', url: '/portfolio' },
	{ id: 5, title: 'Downloads', url: '/downloads' },
	{ id: 6, title: 'Contact', url: '/contact' }
]

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: items[0].id
		}
	}

	updateSelection = (item) => {
		this.setState({
			selected: item.id
		});

		console.log(this.state.selected);
	}

  render() {
    return <div>
      <ScrollNav items={items} selected={this.state.selected} onSelection={this.updateSelection}/>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))