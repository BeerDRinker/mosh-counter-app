import React, { Component } from 'react';

import { Navbar } from './components/Navbar'
import Counters from './components/Counters'

import './App.scss';

class App extends Component {
  constructor() {
    super()
    console.log(' App - Constructor ');
	}
	
	componentDidMount() {
		console.log('mounted')
	}

  state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		]
	}

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].value++
		this.setState({
			counters
		})
	}

	handleDecrement = (counter) => {
		const counters = [ ...this.state.counters ]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].value--
		this.setState({
			counters
		})
	}

	handleReset = () => {
		const counters = this.state.counters.map(counter => {
			counter.value = 0
			return counter
		})
		this.setState({
			counters
		})
	}

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(counter => counter.id !== counterId)
		this.setState({
			counters
		})
	}

  render() {
		console.log('rendered')
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className="container">
            <Counters
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              counters={this.state.counters}
            />
          </main>
      </div>
    );
  }
}

export default App;
