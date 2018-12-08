import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
	
	render() {
	console.log('Counters rendered')
		const { onReset, onDelete, onIncrement, onDecrement, counters } = this.props
		return (
			<div>
				<button 
					className="btn btn-primary btn-sm m-2"
					onClick={onReset}
				>
					Reset
				</button>
				{ counters.map(counter => 
					(<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						counter={counter}
					/>)
				)}
			</div>
		)
	}
}
