import React, {Component} from 'react';

class NavigationBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return  <div className="nav">
			<ul >
			<li><a href="/users">Users</a></li>
			<li><a href="/about">About</a></li>
			</ul>
		</div> ;
	}
}

export default NavigationBar;