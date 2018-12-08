import React from 'react'

export const Navbar = ({ totalCounters }) => {
	console.log('Navbar rendered')
	return(
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand" href="">
				Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
			</span>
		</nav>
	)
}
