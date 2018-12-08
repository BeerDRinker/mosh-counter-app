import React, { Component } from 'react'

export default class Counter extends Component {

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps: ', prevProps);
		console.log('prevState: ', prevState);
		if(prevProps.counter.value !== this.props.counter.value) {
			// do somesing
		}
	}

	componentWillUnmount() {
		console.log('Counter - unmount');
	}

	formatCount() {
		const { value } = this.props.counter
		return value === 0 ? 'Zero' : value
	}

	getBadgeClasses() {
		const { value } = this.props.counter
		let classes = "text-justify badge m-2 badge-";
		return classes += (value === 0) ? "warning" : "primary";
	}
	
	render() {
		console.log('Counter rendered')

		const { onIncrement, onDecrement, onDelete, counter } = this.props
		console.log('counter.value: ', counter.value === 0)
		return (
			<div className="row m-3 text-center text-justify">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button 
						onClick={() => onIncrement(counter)}
						className="btn btn-secondary btn-sm"
					>
						+
					</button>
					<button 
						disabled={ counter.value === 0 }
						onClick={() => onDecrement(counter)}
						className="btn btn-secondary btn-sm m-2"
					>
						-
					</button>
					<button
						type="button"
						onClick={() => onDelete(counter.id)}
						className="btn btn-danger btn-sm"
					>
						x
					</button>
				</div>
			</div>
		)
	}

}
